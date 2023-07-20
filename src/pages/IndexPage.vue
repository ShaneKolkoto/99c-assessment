<template>
  <q-page class="q-pa-sm flex flex-center">
    <q-card class="card-form">
      <q-card-section class="q-pa-md">
        <q-form @submit="submitForm">
          <q-input
            v-model="form.firstName"
            label="First Name"
            dense
            class="q-mb-md"
            required
          >
            <template #prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            v-model="form.lastName"
            label="Last Name"
            dense
            class="q-mb-md"
            required
          >
            <template #prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            v-model="form.email"
            type="email"
            label="Email Address"
            dense
            class="q-mb-md"
            required
          >
            <template #prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <div v-if="emailErr" class="err-message">
            {{ emailErr }}
          </div>
          <input type="file" ref="fileInput" multiple @change="selectFiles" />
          <div v-for="(file, index) in files" :key="index" class="file-item">
            <span class="file-name">{{ file.file }}</span>
            <q-btn
              icon="delete"
              @click="removeFile(index)"
              flat
              round
              dense
              class="file-delete-btn"
            />
          </div>
          <div class="loader" v-show="isLoading"></div>
          <div
            v-if="uploadMsg"
            :class="{ 'success-msg': isSuccessMsg(), 'err-msg': isErrorMsg() }"
          >
            {{ uploadMsg }}
          </div>
          <q-card-actions align="center">
            <q-btn
              type="submit"
              label="Submit"
              :color="submitButtonColor"
              :disabled="!isFormValid"
              :class="submitButtonClass"
              :animate="submitButtonAnimation"
              @mouseover="submitButtonColor = 'primary'"
              @mouseout="submitButtonColor = 'primary'"
            ></q-btn>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import { api } from "../boot/axios";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
      },
      files: [],
      emailErr: "",
      uploadMsg: "",
      isLoading: false,
      submitButtonColor: "primary",
      submitButtonAnimation: "pulse",
    };
  },
  watch: {
    "form.email"(newVal) {
      let isValid = this.isEmailValid(newVal);
      if (!isValid) {
        this.emailErr = "Provide a valid email address";
      } else {
        this.emailErr = false;
      }
    },
  },
  computed: {
    isFormValid() {
      return (
        this.form.firstName.trim().length > 0 &&
        this.form.lastName.trim().length > 0 &&
        this.form.email.trim().length > 0
      );
    },
  },
  methods: {
    // Standard method function
    submitForm() {
      if (this.files.length <= 0) {
        this.uploadMsg = `Atleast one file is required to submit`;
      } else {
        // Create FormData object
        const formData = new FormData();
        formData.append("firstName", this.form.firstName);
        formData.append("lastName", this.form.lastName);
        formData.append("email", this.form.email);
        // Send POST request with Axios
        this.isLoading = true;

        api
          .post("/api/entry", formData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response.status === 200) {
              setTimeout(() => {
                this.isLoading = false;
                if (response.status === 200) {
                  this.uploadMsg = `form has been successfully submited`;
                  this.$router.push("/thank-you");
                } else {
                  this.uploadMsg = `Error while submitting form`;
                }

                setTimeout(() => {
                  this.uploadMsg = "";
                }, 2000);
              }, 2000);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    async selectFiles(event) {
      const selectedFiles = Array.from(event.target.files);
      selectedFiles.forEach(async (item) => {
        this.isLoading = true;
        this.uploadMsg = "";
        // Vuex Action that fecthes api /api/upload call
        const upload = await this.$store.dispatch("uploadFile", item);
        if (!upload) {
        } else {
          this.files.push({
            file: item.name,
            uploading: true,
            success: false,
          });
        }
        setTimeout(() => {
          this.isLoading = false;
          if (upload) {
            this.uploadMsg = `${item.name} has been successfully uploaded`;
          } else {
            this.uploadMsg = `${item.name} is not a valid format`;
          }

          setTimeout(() => {
            this.uploadMsg = "";
          }, 2000);
        }, 2000);
      });
    },
    // Remove single file upload
    removeFile(index) {
      this.files.splice(index, 1);
      if (this.files.length) {
        this.files = null;
      }
    },

    // Error Handling
    isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    isSuccessMsg() {
      return this.uploadMsg && this.uploadMsg.includes("successfully");
    },

    isErrorMsg() {
      return this.uploadMsg && !this.isSuccessMsg();
    },
  },
  components: {},
});
</script>
<style scoped>
.card-form {
  max-width: 400px;
  margin: 0 auto;
}

.files-preview {
  margin-bottom: 10px;
  font-size: 14px;
}

.success-message {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}

.err-message {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}

.form-valid {
  background-color: green;
  color: white;
}

.form-invalid {
  background-color: red;
  color: white;
}

.file-delete-btn {
  margin-left: 5px;
}

.q-card__section.q-card__section--vert {
  width: 400px;
}

input[type="file"] {
  border: solid 1px;
  border-radius: 5px;
  padding: 4px;
  position: relative;
  right: 5px;
}

@media (max-width: 425px) {
  .q-card__section.q-card__section--vert {
    width: 350px;
  }
}

.success-msg {
  color: green;
  font-weight: bold;
}

.err-msg {
  color: red;
  font-weight: bold;
}

.loader {
  position: relative;
  left: 300px;
  bottom: 15px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
