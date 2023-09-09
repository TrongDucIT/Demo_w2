<template>
  <main class="signup">
    <form @submit.prevent="handleSubmit">
      <h3>Sign Up</h3>
      <div class="form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          v-model="user.firstName"
        />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Last Name"
          v-model="user.lastName"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model="user.confirmPassword"
        />
      </div>

      <button class="btn btn-primary btn-block">Sign Up</button>
      <div class="text">
        <p>If you have already registered?</p>
        <router-link to="/login"> Login !</router-link>
      </div>
      <!-- Kiểm tra biến đã đăng ký thành công -->
      <div class="thanhcong" v-if="registered">
        <p style="margin-bottom;: 10px">Đăng ký thành công!</p>
        <router-link to="/login">Đến trang đăng nhập</router-link>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      registered: false, // Biến để kiểm tra xem đã đăng ký thành công chưa
    };
  },
  methods: {
    handleSubmit() {
      // Lưu thông tin người dùng vào local storage với key là email của người dùng
      localStorage.setItem(this.user.email, JSON.stringify(this.user));
      //   alert("Thông tin người dùng đã được lưu vào local storage.");
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.email = "";
      this.user.password = "";
      this.user.confirmPassword = "";
      this.registered = true;
    },
  },
};
</script>


<style>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}
form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
}
/* Định dạng chung cho form */

/* Định dạng cho tiêu đề "Sign Up" */
h3 {
  text-align: center;
  font-size: 20px;

  color: #333;
}

/* Định dạng cho các nhóm trường và nhãn */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

/* Định dạng cho trường nhập liệu */
.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Định dạng cho nút đăng ký */
.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
.text {
  text-align: center;
  padding: 10px;
}
.thanhcong {
  text-align: center;
}
</style>
