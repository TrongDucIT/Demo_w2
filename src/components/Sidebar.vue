<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="'vue'" />
    </div>
    <div class="menu-tonggle-wrap">
      <button class="menu-tonggle" @click="TonggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/search">
        <span class="material-icons">search</span>
        <span class="text">Search</span>
      </router-link>
      <router-link class="button" to="/team">
        <span class="material-icons">group</span>
        <span class="text">Team</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="" @click="toggleLoginLogout">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
      <div v-if="showLoginLogout" class="login-logout">
        <router-link class="button" to="/signup">
          <span class="material-icons">login</span>
          <span class="text">Sign-up</span>
        </router-link>
        <router-link class="button" to="/login">
          <span class="material-icons">login</span>
          <span class="text">Login</span>
        </router-link>
        <router-link class="button" to="/login" @click="handleLogout">
          <span class="material-icons">logout</span>
          <span class="text">Logout</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>


<script>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const showLoginLogout = ref(false);

const TonggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};

const toggleLoginLogout = () => {
  showLoginLogout.value = !showLoginLogout.value;
};

export default {
  setup() {
    const handleLogout = () => {
      // Xóa thông tin người dùng khỏi localStorage
      localStorage.removeItem("loggedIn");

      // Chuyển đến trang login sau khi logout
      this.$router.push("/login");
    };
    // Lifecycle hooks (optional)
    onMounted(() => {
      // This code runs when the component is mounted
    });

    onBeforeUnmount(() => {
      // This code runs before the component is unmounted
    });

    return {
      handleLogout,
      is_expanded,
      showLoginLogout,
      TonggleMenu,
      toggleLoginLogout,
    };
  },
};
</script>


<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;

  .flex {
    flex: 1;
  }
  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  .menu-tonggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-tonggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translate(0.3rem);
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);

        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }
  &.is_expanded {
    width: var(--sidebar-width);
    .menu-tonggle-wrap {
      top: -3rem;
      .menu-tonggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>