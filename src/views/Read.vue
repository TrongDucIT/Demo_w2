<template>
  <main>
    <div class="header-home">
      <nav class="nav-bar">
        <ul>
          <li>
            <a href="#" @click="checkLoginAndNavigateToRead"
              ><i class="fa-solid fa-bars"></i> Đọc truyện</a
            >
          </li>
          <li><a href="#">Mới cập nhật</a></li>
          <li>
            <a href="#"> Thể loại <i class="fa-solid fa-caret-down"></i> </a>
            <ul class="category-menu">
              <li><a href="#">Tiên Hiệp</a></li>
              <li><a href="#">Ngôn tình</a></li>
              <li><a href="#">Lịch sử</a></li>
              <li><a href="#">Truyện ma</a></li>
              <li><a href="#">Trinh thám</a></li>
              <li><a href="#">Dị giới</a></li>
              <li><a href="#">Truyện ngắn</a></li>
              <li><a href="#">Tiểu thuyết</a></li>
              <li><a href="#">Kiếm hiệp</a></li>
              <li><a href="#">Truyện teen</a></li>
              <li><a href="#">Quân sự</a></li>
              <li><a href="#">Xuyên không</a></li>
              <li><a href="#">Truyện cười</a></li>
              <li><a href="#">Review</a></li>
            </ul>
          </li>
          <li><a href="#">Truyện hot</a></li>
          <li><a href="#">Đọc nhiều</a></li>
        </ul>
      </nav>
      <div class="home">
        <i class="fa-regular fa-user"></i>
        <p v-if="firstName">Hello, {{ firstName }}!</p>
      </div>
    </div>
    <div class="container">
      <div class="main-col">
        <div id="breadcrum">
          <span>
            <i class="fa-solid fa-house"></i>
            <router-link to="/"><span> Trang chủ</span></router-link>
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <span>{{ name }}</span>
        </div>
        <div itemscope>
          <div id="story-detail" data-type="2">
            <div class="col1">
              <div class="thumb">
                <img
                  itemprop="image"
                  class="cover"
                  :src="image"
                  alt="naruto Cover"
                />
              </div>
              <div class="infos">
                <p class="author">
                  <i class="fa-regular fa-user"></i><span>{{ author }}</span>
                </p>
                <p class="story-categories">
                  <i class="fa-regular fa-folder"></i>
                  <span>{{ genre }}</span>
                </p>
                <p class="story-categories">
                  <i class="fa-regular fa-star"></i>
                  <span>{{ complete }}</span>
                </p>
                <p class="story-categories">
                  <i class="fa-solid fa-user-tie"></i>
                  <span>{{ publish }}</span>
                </p>
                <p class="story-categories">
                  <i class="fa-regular fa-eye"></i>
                  <span>{{ view }}</span>
                </p>

                <p class="story-categories">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <span>{{ date }}</span>
                </p>
                <p class="story-categories">
                  <i class="fa-solid fa-tag"></i>
                  <span>{{ sotap }}</span>
                </p>
              </div>
            </div>
            <div class="col2">
              <h1 itemprop="name" class="title">{{ name }}</h1>
              <div class="rate">
                <div class="rate-holder" data-score="9.6">
                  <span style="width: 96%"></span>
                  <p id="rating-action">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </p>
                </div>
              </div>
              <div class="action">
                <a class="chapter-list" href="">Danh sách chương</a>
                <br />
                <button class="read-btn">
                  <router-link
                    :to="{
                      path: '/readmanga',
                      query: {
                        name: name,
                        image: image,
                        author: author,
                        publish: publish,
                        genre: genre,
                        view: view,
                        complete: complete,
                        date: date,
                        sotap: sotap,
                        // Các thông tin khác mà bạn muốn chuyển
                      },
                    }"
                    >Đọc Truyện</router-link
                  >
                </button>
              </div>
              <div class="description" itemprop="description">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      loggedIn: false, // Thêm biến để kiểm tra trạng thái đăng nhập
    };
  },
  mounted() {
    // Lấy thông tin từ query parameters
    this.name = this.$route.query.name || "";
    this.image = this.$route.query.image || "";
    this.author = this.$route.query.author || "";
    this.genre = this.$route.query.genre || "";
    this.publish = this.$route.query.publish || "";
    this.view = this.$route.query.view || "";
    this.complete = this.$route.query.complete || "";
    this.date = this.$route.query.date || "";
    this.sotap = this.$route.query.sotap || "";
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      // Nếu đã đăng nhập, lấy tên người dùng từ Local Storage
      this.firstName = localStorage.getItem("firstName");
    }
  },

  methods: {
    checkLoginAndNavigateToRead() {
      const loggedIn = localStorage.getItem("loggedIn");
      // Kiểm tra xem đã đăng nhập hay chưa khi nhấn vào "Đọc truyện"
      if (loggedIn === "true") {
        // Người dùng đã đăng nhập, thực hiện hành động khi nhấn vào "Đọc truyện"
        // Ví dụ: chuyển hướng đến trang đọc truyện
        this.$router.push("/about");
      } else {
        // Người dùng chưa đăng nhập, bạn có thể hiển thị một thông báo
        alert("Vui lòng đăng nhập trước khi đọc truyện.");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
}
.main-col {
  flex: 0 0 72%;
  max-width: 72%;
}
#breadcrumb {
  font-size: 14px;
  line-height: 18px;
  padding: 0 5px;
  overflow: hidden;
  white-space: nowrap;

  span,
  h1 {
    display: inline-block;
    font-weight: 400;
  }
  a {
    color: #595959;
    display: inline-block;
    line-height: 40px;
  }
}

//
#story-detail {
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 15px;

  .col1 {
    width: 220px;
    flex-shrink: 0;
    margin-right: 20px;
  }
  .thumb {
    margin-bottom: 15px;
    overflow: hidden;
    width: 220px;

    img {
      max-width: 100%;
      vertical-align: middle;
    }
  }
  .infos p {
    margin: 8px 0;
    line-height: 1.5;
    display: flex;

    i {
      width: 20px;
      color: #555;
      flex-shrink: 0;
    }
    span {
      flex-grow: 1;
      flex-wrap: wrap;

      a {
        color: #016eb2;
        text-decoration: none;
      }
    }
  }
  .col2 {
    flex-grow: 1;
    .action {
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .title {
    text-transform: uppercase;
    color: #df1a0c;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }
  .rate {
    text-align: center;
    margin: 8px 0;
    height: 39px;

    .rate-holder {
      position: relative;
      color: #fafafa;
      display: inline-block;
      text-align: left;
      font-family: webtruyen_icon;
      font-size: 18px;

      span {
        position: absolute;
        top: 0;
        left: 0;
        color: #ffc74c;
        overflow: hidden;
        height: 100%;
        white-space: nowrap;
      }
      .rate-holder p {
        position: absolute;
        top: 0;
        left: 0;
        color: #ffc74c;
        overflow: hidden;
        height: 100%;
        white-space: nowrap;
        width: 100%;
        letter-spacing: 5px;

        i {
          opacity: 0;
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
.read-btn {
  padding: 12px 16px;
  font-weight: bold;
  text-transform: uppercase;
  background: #2c7abe;
}
// header
.header-home {
  display: flex;
  height: 50px;
  background: #2c7abe;
  color: #fff;

  .home {
    padding: 15px;
    display: flex;
    position: absolute;
    right: 70px;
    .fa-user {
      margin-right: 10px;
    }
  }
}

.nav-bar {
  color: #fff;
  // text-align: center;
  left: 100px;
}

.nav-bar ul {
  list-style-type: none;
  padding: 15px;
}

.nav-bar li {
  display: inline;
  margin-right: 20px;
  text-align: center;
}

.nav-bar a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.nav-bar a:hover {
  text-decoration: underline;
}
/* Thiết lập danh sách con hiển thị theo chiều dọc dưới "Thể loại" */
.category-menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  border: 1px solid grey;

  /* Tự động ẩn danh sách con */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.1s ease-in-out;
  left: 320px;
  text-decoration: none;
  /* Thiết lập phần tử là border-box */
  box-sizing: border-box;
  li {
    width: 100%;
  }
}

/* Hiển thị danh sách con khi hover vào phần tử "Thể loại" */
li:hover .category-menu {
  opacity: 1;
  pointer-events: auto;
  text-decoration: underline;
}

/* Bỏ căn giữa văn bản trong danh sách con */
.category-menu li {
  text-align: left;
  /* Thiết lập mỗi mục danh sách là border-box và đặt đường viền */
  box-sizing: border-box;
  border: 1px solid #ccc; /* Đường viền cho mỗi mục danh sách */
  padding: 10px; /* Khoảng cách bên trong mục danh sách */
}
</style>
