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
    <div class="left-right">
      <div class="left">
        <div class="container">
          <div class="main-col">
            <div id="breadcrum">
              <span>
                <i class="fa-solid fa-house"></i>
                <router-link to="/"><span> Trang chủ</span></router-link>
                <i class="fa-solid fa-angle-right"></i>
              </span>
              <router-link
                :to="{
                  path: '/read',
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
                  },
                }"
                ><span>{{ name }}</span></router-link
              >
              <i class="fa-solid fa-angle-right"></i>
              <span>{{ selectedChapter }}</span>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="chapter-button">
            <a title="Chương trước" class="chap-nav disabled"
              ><i class="fa-solid fa-chevron-left"></i> Trước</a
            >
            <a class="all-chapter">
              <select v-model="selectedChapter">
                <option :value="this.chap1">{{ chap1 }}</option>
                <option :value="this.chap2">{{ chap2 }}</option>
                <option :value="this.chap3">{{ chap3 }}</option>
              </select>
            </a>
            <a class="config"><i class="fa-regular fa-lightbulb"></i></a>
            <a title="Chương sau" class="chap-nav disabled"
              >Sau <i class="fa-solid fa-chevron-right"></i
            ></a>
          </div>
        </div>
        <div class="container">
          <div class="naruto" v-if="name === 'Naruto'">
            <div class="list-chap1" v-if="selectedChapter === this.chap1">
              <img :src="t1_1" />
              <img :src="t1_2" />
              <img :src="t1_3" />
              <img :src="t1_4" />
              <img :src="t1_5" />
              <img :src="t1_6" />
              <img :src="t1_7" />
              <img :src="t1_8" />
              <img :src="t1_9" />
              <img :src="t1_10" />
            </div>
            <div class="list-chap2" v-if="selectedChapter === this.chap2">
              <img :src="t2_1" />
              <img :src="t2_2" />
              <img :src="t2_3" />
              <img :src="t2_4" />
              <img :src="t2_5" />
              <img :src="t2_6" />
              <img :src="t2_7" />
              <img :src="t2_8" />
              <img :src="t2_9" />
              <img :src="t2_10" />
            </div>
            <div class="list-chap3" v-if="selectedChapter === this.chap3">
              <img :src="t3_1" />
              <img :src="t3_2" />
              <img :src="t3_3" />
              <img :src="t3_4" />
              <img :src="t3_5" />
              <img :src="t3_6" />
              <img :src="t3_7" />
              <img :src="t3_8" />
              <img :src="t3_9" />
              <img :src="t3_10" />
            </div>
          </div>
          <div class="doraemon" v-if="name === 'Doraemon'">
            <div class="list-chap1" v-if="selectedChapter === this.chap1">
              <img :src="d1_1" />
              <img :src="d1_2" />
              <img :src="d1_3" />
              <img :src="d1_4" />
              <img :src="d1_5" />
              <img :src="d1_6" />
              <img :src="d1_7" />
              <img :src="d1_8" />
              <img :src="d1_9" />
              <img :src="d1_10" />
            </div>
            <div class="list-chap2" v-if="selectedChapter === this.chap2">
              <img :src="d2_1" />
              <img :src="d2_2" />
              <img :src="d2_3" />
              <img :src="d2_4" />
              <img :src="d2_5" />
              <img :src="d2_6" />
              <img :src="d2_7" />
              <img :src="d2_8" />
              <img :src="d2_9" />
              <img :src="d2_10" />
            </div>
            <div class="list-chap3" v-if="selectedChapter === this.chap3">
              <img :src="d3_1" />
              <img :src="d3_2" />
              <img :src="d3_3" />
              <img :src="d3_4" />
              <img :src="d3_5" />
              <img :src="d3_6" />
              <img :src="d3_7" />
              <img :src="d3_8" />
              <img :src="d3_9" />
              <img :src="d3_10" />
            </div>
          </div>
          <div class="olong" v-if="name === 'Ô long viện'">
            <div class="list-chap1" v-if="selectedChapter === this.chap1">
              <img :src="o1_1" />
              <img :src="o1_2" />
              <img :src="o1_3" />
              <img :src="o1_4" />
              <img :src="o1_5" />
              <img :src="o1_6" />
              <img :src="o1_7" />
              <img :src="o1_8" />
              <img :src="o1_9" />
              <img :src="o1_10" />
            </div>
            <div class="list-chap2" v-if="selectedChapter === this.chap2">
              <img :src="o2_1" />
              <img :src="o2_2" />
              <img :src="o2_3" />
              <img :src="o2_4" />
              <img :src="o2_5" />
              <img :src="o2_6" />
              <img :src="o2_7" />
              <img :src="o2_8" />
              <img :src="o2_9" />
              <img :src="o2_10" />
            </div>
            <div class="list-chap3" v-if="selectedChapter === this.chap3">
              <img :src="o3_1" />
              <img :src="o3_2" />
              <img :src="o3_3" />
              <img :src="o3_4" />
              <img :src="o3_5" />
              <img :src="o3_6" />
              <img :src="o3_7" />
              <img :src="o3_8" />
              <img :src="o3_9" />
              <img :src="o3_10" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="chapter-button">
            <a title="Chương trước" class="chap-nav disabled"
              ><i class="fa-solid fa-chevron-left"></i> Trước</a
            >
            <a class="all-chapter">
              <select v-model="selectedChapter">
                <option :value="this.chap1">{{ chap1 }}</option>
                <option :value="this.chap2">{{ chap2 }}</option>
                <option :value="this.chap3">{{ chap3 }}</option>
              </select>
            </a>
            <a class="config"><i class="fa-solid fa-gear"></i></a>
            <a title="Chương sau" class="chap-nav disabled"
              >Sau <i class="fa-solid fa-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="right">
        <section class="card-box">
          <header>Danh sách các chương</header>
          <div class="top-stories">
            <ul>
              <li>
                <span @click="selectChapter(this.chap1)">{{ chap1 }}</span>
              </li>
              <li>
                <span @click="selectChapter(this.chap2)">{{ chap2 }}</span>
              </li>
              <li>
                <span @click="selectChapter(this.chap3)">{{ chap3 }}</span>
              </li>
            </ul>
          </div>
          <footer>
            <a class="show-more-btn" @click="Xem"
              >Xem thêm <i class="fa-solid fa-caret-down"></i
            ></a>
          </footer>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      name: "",
      author: "",
      genre: "",
      publish: "",
      view: null,
      complete: "",
      date: "",
      sotap: "",
      chap1: "",
      chap2: "",
      chap3: "",
      selectedChapter: this.chap1,
      currentTruyen: "",
      firstName: "",
      loggedIn: false,
      isDarkMode: false,
    };
  },
  computed: {
    themeClass() {
      return this.isDarkMode ? "dark-theme" : "light-theme";
    },
  },

  mounted() {
    this.name = this.$route.query.name || "";
    this.image = this.$route.query.image || "";
    this.author = this.$route.query.author || "";
    this.genre = this.$route.query.genre || "";
    this.publish = this.$route.query.publish || "";
    this.view = this.$route.query.view || "";
    this.complete = this.$route.query.complete || "";
    this.date = this.$route.query.date || "";
    this.sotap = this.$route.query.sotap || "";
    this.chapter = this.$route.query.chapter || "";
    // Sử dụng fetch để truy cập dữ liệu từ server
    fetch("http://localhost:3000/naruto")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.naruto = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
        // Gán giá trị "namechap" từ dữ liệu naruto vào thuộc tính namechap
        if (this.name === "Naruto") {
          this.chap1 = this.naruto.chapter[0].chap1[0].namechap;
          this.chap2 = this.naruto.chapter[0].chap2[0].namechap;
          this.chap3 = this.naruto.chapter[0].chap3[0].namechap;
        }
        this.selectedChapter = this.chap1;
        this.t1_1 = this.naruto.chapter[0].chap1[0].t1;
        this.t1_2 = this.naruto.chapter[0].chap1[0].t2;
        this.t1_3 = this.naruto.chapter[0].chap1[0].t3;
        this.t1_4 = this.naruto.chapter[0].chap1[0].t4;
        this.t1_5 = this.naruto.chapter[0].chap1[0].t5;
        this.t1_6 = this.naruto.chapter[0].chap1[0].t6;
        this.t1_7 = this.naruto.chapter[0].chap1[0].t7;
        this.t1_8 = this.naruto.chapter[0].chap1[0].t8;
        this.t1_9 = this.naruto.chapter[0].chap1[0].t9;
        this.t1_10 = this.naruto.chapter[0].chap1[0].t10;

        this.t2_1 = this.naruto.chapter[0].chap2[0].t1;
        this.t2_2 = this.naruto.chapter[0].chap2[0].t2;
        this.t2_3 = this.naruto.chapter[0].chap2[0].t3;
        this.t2_4 = this.naruto.chapter[0].chap2[0].t4;
        this.t2_5 = this.naruto.chapter[0].chap2[0].t5;
        this.t2_6 = this.naruto.chapter[0].chap2[0].t6;
        this.t2_7 = this.naruto.chapter[0].chap2[0].t7;
        this.t2_8 = this.naruto.chapter[0].chap2[0].t8;
        this.t2_9 = this.naruto.chapter[0].chap2[0].t9;
        this.t2_10 = this.naruto.chapter[0].chap2[0].t10;

        this.t3_1 = this.naruto.chapter[0].chap3[0].t1;
        this.t3_2 = this.naruto.chapter[0].chap3[0].t2;
        this.t3_3 = this.naruto.chapter[0].chap3[0].t3;
        this.t3_4 = this.naruto.chapter[0].chap3[0].t4;
        this.t3_5 = this.naruto.chapter[0].chap3[0].t5;
        this.t3_6 = this.naruto.chapter[0].chap3[0].t6;
        this.t3_7 = this.naruto.chapter[0].chap3[0].t7;
        this.t3_8 = this.naruto.chapter[0].chap3[0].t8;
        this.t3_9 = this.naruto.chapter[0].chap3[0].t9;
        this.t3_10 = this.naruto.chapter[0].chap3[0].t10;
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu naruto: " + error);
      });
    fetch("http://localhost:3000/doraemon")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.doraemon = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
        // Gán giá trị "namechap" từ dữ liệu naruto vào thuộc tính namechap
        if (this.name === "Doraemon") {
          this.chap1 = this.doraemon.chapter[0].chap1[0].namechap;
          this.chap2 = this.doraemon.chapter[0].chap2[0].namechap;
          this.chap3 = this.doraemon.chapter[0].chap3[0].namechap;
        }
        this.selectedChapter = this.chap1;
        this.d1_1 = this.doraemon.chapter[0].chap1[0].t1;
        this.d1_2 = this.doraemon.chapter[0].chap1[0].t2;
        this.d1_3 = this.doraemon.chapter[0].chap1[0].t3;
        this.d1_4 = this.doraemon.chapter[0].chap1[0].t4;
        this.d1_5 = this.doraemon.chapter[0].chap1[0].t5;
        this.d1_6 = this.doraemon.chapter[0].chap1[0].t6;
        this.d1_7 = this.doraemon.chapter[0].chap1[0].t7;
        this.d1_8 = this.doraemon.chapter[0].chap1[0].t8;
        this.d1_9 = this.doraemon.chapter[0].chap1[0].t9;
        this.d1_10 = this.doraemon.chapter[0].chap1[0].t10;
        this.d1_11 = this.doraemon.chapter[0].chap1[0].t11;
        this.d1_12 = this.doraemon.chapter[0].chap1[0].t12;
        this.d1_13 = this.doraemon.chapter[0].chap1[0].t13;
        this.d1_14 = this.doraemon.chapter[0].chap1[0].t14;
        this.d1_15 = this.doraemon.chapter[0].chap1[0].t15;
        this.d1_16 = this.doraemon.chapter[0].chap1[0].t16d;

        this.d2_1 = this.doraemon.chapter[0].chap2[0].t1;
        this.d2_2 = this.doraemon.chapter[0].chap2[0].t2;
        this.d2_3 = this.doraemon.chapter[0].chap2[0].t3;
        this.d2_4 = this.doraemon.chapter[0].chap2[0].t4;
        this.d2_5 = this.doraemon.chapter[0].chap2[0].t5;
        this.d2_6 = this.doraemon.chapter[0].chap2[0].t6;
        this.d2_7 = this.doraemon.chapter[0].chap2[0].t7;
        this.d2_8 = this.doraemon.chapter[0].chap2[0].t8;
        this.d2_9 = this.doraemon.chapter[0].chap2[0].t9;
        this.d2_10 = this.doraemon.chapter[0].chap2[0].t10;
        this.d2_11 = this.doraemon.chapter[0].chap2[0].t11;
        this.d2_12 = this.doraemon.chapter[0].chap2[0].t12;
        this.d2_13 = this.doraemon.chapter[0].chap2[0].t13;
        this.d2_14 = this.doraemon.chapter[0].chap2[0].t14;

        this.d3_1 = this.doraemon.chapter[0].chap3[0].t1;
        this.d3_2 = this.doraemon.chapter[0].chap3[0].t2;
        this.d3_3 = this.doraemon.chapter[0].chap3[0].t3;
        this.d3_4 = this.doraemon.chapter[0].chap3[0].t4;
        this.d3_5 = this.doraemon.chapter[0].chap3[0].t5;
        this.d3_6 = this.doraemon.chapter[0].chap3[0].t6;
        this.d3_7 = this.doraemon.chapter[0].chap3[0].t7;
        this.d3_8 = this.doraemon.chapter[0].chap3[0].t8;
        this.d3_9 = this.doraemon.chapter[0].chap3[0].t9;
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu doraemon: " + error);
      });
    fetch("http://localhost:3000/olong")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.olong = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
        // Gán giá trị "namechap" từ dữ liệu naruto vào thuộc tính namechap
        if (this.name === "Ô long viện") {
          this.chap1 = this.olong.chapter[0].chap1[0].namechap;
          this.chap2 = this.olong.chapter[0].chap2[0].namechap;
          this.chap3 = this.olong.chapter[0].chap3[0].namechap;
        }
        this.selectedChapter = this.chap1;
        this.o1_1 = this.olong.chapter[0].chap1[0].t1;
        this.o1_2 = this.olong.chapter[0].chap1[0].t2;
        this.o1_3 = this.olong.chapter[0].chap1[0].t3;
        this.o1_4 = this.olong.chapter[0].chap1[0].t4;
        this.o1_5 = this.olong.chapter[0].chap1[0].t5;
        this.o1_6 = this.olong.chapter[0].chap1[0].t6;
        this.o1_7 = this.olong.chapter[0].chap1[0].t7;
        this.o1_8 = this.olong.chapter[0].chap1[0].t8;
        this.o1_9 = this.olong.chapter[0].chap1[0].t9;
        this.o1_10 = this.olong.chapter[0].chap1[0].t10;

        this.o2_1 = this.olong.chapter[0].chap2[0].t1;
        this.o2_2 = this.olong.chapter[0].chap2[0].t2;
        this.o2_3 = this.olong.chapter[0].chap2[0].t3;
        this.o2_4 = this.olong.chapter[0].chap2[0].t4;
        this.o2_5 = this.olong.chapter[0].chap2[0].t5;
        this.o2_6 = this.olong.chapter[0].chap2[0].t6;
        this.o2_7 = this.olong.chapter[0].chap2[0].t7;
        this.o2_8 = this.olong.chapter[0].chap2[0].t8;
        this.o2_9 = this.olong.chapter[0].chap2[0].t9;
        this.o2_10 = this.olong.chapter[0].chap2[0].t10;

        this.o3_1 = this.olong.chapter[0].chap3[0].t1;
        this.o3_2 = this.olong.chapter[0].chap3[0].t2;
        this.o3_3 = this.olong.chapter[0].chap3[0].t3;
        this.o3_4 = this.olong.chapter[0].chap3[0].t4;
        this.o3_5 = this.olong.chapter[0].chap3[0].t5;
        this.o3_6 = this.olong.chapter[0].chap3[0].t6;
        this.o3_7 = this.olong.chapter[0].chap3[0].t7;
        this.o3_8 = this.olong.chapter[0].chap3[0].t8;
        this.o3_9 = this.olong.chapter[0].chap3[0].t9;
        this.o3_10 = this.olong.chapter[0].chap3[0].t10;
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu naruto: " + error);
      });
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
    selectChapter(chapterName) {
      // Xử lý khi một chương được chọn
      this.selectedChapter = chapterName;
    },
    Xem() {
      alert("\t Bận quá chưa cập nhật ! \n \t Chờ tuần sau nhé");
    },
  },
};
</script>

<style lang="scss" scoped>
.left-right {
  display: flex;
  .left {
    text-align: center;
    flex: 0 0 72%;
    max-width: 72%;
  }
  .right {
    flex: 0 0 25%;
    max-width: 25%;
    margin-left: 20px;
    width: auto;
    margin-right: 20px;

    .card-box {
      cursor: pointer;
      background: #fff;
      margin-bottom: 12px;
      border-top: 1px solid #e5e6e9;
      border-bottom: 1px solid #e5e6e9;

      header {
        padding: 8px 10px;
        border-bottom: 1px solid #e5e6e9;
        color: #2f52b2;
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
        letter-spacing: -2px;
        text-transform: uppercase;
      }
      footer {
        text-align: center;
        padding: 8px 10px;

        .show-more-btn {
          padding: 5px 20px;
          font-size: 14px;
          border-radius: 15px;
          background: #737373;
          color: #fff;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          display: inline-block;
        }
      }
      .top-stories {
        li {
          border-bottom: 1px solid #ccc; /* Đường kẻ dưới mỗi hàng */
        }
      }
    }
  }
}

li {
  text-align: center;
  display: flex;
  align-items: center;

  padding: 10px 0; /* Khoảng cách giữa các hàng */
}

span {
  margin: 0 10px; /* Khoảng cách giữa các phần tử span */
}
i {
  font-size: 13px;
}
.container {
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  .list-chap1,
  .list-chap2 {
    text-align: center;
  }
}

#breadcrum {
  padding-top: 5px;
}
//

a {
  text-decoration: none;
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

//chapter
.chapter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chapter-button {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  text-align: center;

  a {
    color: #fff;
    display: inline-block;
    outline: 0;
    padding: 10px 16px;
    cursor: pointer;
    background: #2980b9;
    font-size: 18px;

    text-align: center;
    margin: 0 10px; /* Khoảng cách giữa các thẻ <a> */
  }
  .all-chapter,
  .config {
    background: #888;
  }
}
select {
  width: 300px; /* Độ rộng của select */
}

select option {
  width: 100%; /* Độ rộng tối thiểu cho các option */
}
.light-theme {
  // CSS cho chế độ sáng
  background-color: #ffffff;
  color: #000000;
}

.dark-theme {
  // CSS cho chế độ tối
  background-color: #333333;
  color: #ffffff;
}
</style>
