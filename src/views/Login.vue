<template>
  <main class="login">
    <form @submit.prevent="login">
      <h3>Login</h3>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <div class="label">Password</div>
        <div class="input-with-icon">
          <input
            type="password"
            class="form-control"
            ref="passwordField"
            placeholder="Password"
            v-model="password"
          />
          <i class="fa-regular fa-eye" @click="togglePasswordVisibility"></i>
        </div>
      </div>
      <button class="btn btn-primary btn-block" type="submit">Login</button>
      <p>
        Do not have an account ?
        <br /><router-link to="/signup">Sign up here!</router-link>
      </p>
    </form>
  </main>
</template>

<!-- <script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false, // Biến để kiểm tra trạng thái đăng nhập
    };
  },
  methods: {
    togglePasswordVisibility() {
      const passwordField = this.$refs.passwordField;
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },
    login() {
      const storedUserData = localStorage.getItem(this.email); // Lấy thông tin người dùng từ Local Storage

      if (storedUserData) {
        const userData = JSON.parse(storedUserData); // Chuyển dữ liệu JSON từ Local Storage thành đối tượng JavaScript

        if (this.password === userData.password) {
          // Đăng nhập thành công
          this.loggedIn = true;
          alert("Đăng nhập thành công!");

          const firstName = userData.firstName; // Lấy firstName từ dữ liệu người dùng

          // Chuyển hướng người dùng đến trang Home và truyền firstName như một query parameter
          this.$router.push({ path: "/", query: { firstName } }); // Sử dụng tên của route "home"
        } else {
          // Đăng nhập thất bại
          alert("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
        }
      } else {
        // Nếu không có dữ liệu trong Local Storage
        alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
      }
    },
  },
};
</script> -->

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false, // Biến để kiểm tra trạng thái đăng nhập
    };
  },
  methods: {
    togglePasswordVisibility() {
      const passwordField = this.$refs.passwordField;
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },
    login() {
      const storedUserData = localStorage.getItem(this.email); // Lấy thông tin người dùng từ Local Storage

      if (storedUserData) {
        const userData = JSON.parse(storedUserData); // Chuyển dữ liệu JSON từ Local Storage thành đối tượng JavaScript

        if (this.password === userData.password) {
          // Đăng nhập thành công
          this.loggedIn = true;
          alert("Đăng nhập thành công!");

          const firstName = userData.firstName; // Lấy firstName từ dữ liệu người dùng

          // Lưu thông tin đăng nhập vào Local Storage
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("firstName", firstName);

          // Chuyển hướng người dùng đến trang Home và truyền firstName như một query parameter
          this.$router.push({ path: "/", query: { firstName } }); // Sử dụng tên của route "home"
        } else {
          // Đăng nhập thất bại
          alert("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
        }
      } else {
        // Nếu không có dữ liệu trong Local Storage
        alert("Tài khoản không tồn tại. Vui lòng đăng ký trước.");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
/* CSS cho biểu mẫu đăng nhập */
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Màu nền của trang */
}

form {
  background-color: #ffffff; /* Màu nền của biểu mẫu */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Đổ bóng cho biểu mẫu */
  width: 300px; /* Độ rộng của biểu mẫu */
  text-align: center;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333; /* Màu chữ cho tiêu đề */
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.label {
  color: #555; /* Màu chữ cho nhãn */
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.password-group {
  display: flex;
  flex-direction: column;
}

.input-with-icon {
  position: relative;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc; /* Màu viền input */
  border-radius: 4px;
  position: relative;
}

.fa-eye {
  position: absolute;
  right: 10px; /* Điều chỉnh khoảng cách từ biểu tượng đến phía bên phải */
  top: 50%;
  transform: translateY(-50%);
  color: #555; /* Màu của biểu tượng */
  cursor: pointer;
}

.fa-eye:hover {
  color: #007bff; /* Màu của biểu tượng khi hover */
}

.btn {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff; /* Màu nền nút */
  color: #fff; /* Màu chữ nút */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #0056b3; /* Màu nền nút khi hover */
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
