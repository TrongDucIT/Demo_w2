<template>
  <main>
    <div class="header-home">
      <nav class="nav-bar">
        <ul>
          <li>
            <a href="#"><i class="fa-solid fa-bars"></i> Đọc truyện</a>
          </li>
          <li><a href="#">Mới cập nhật</a></li>
          <li @click="toggleCategory">
            <a href="#"> Thể loại <i class="fa-solid fa-caret-down"></i> </a>
          </li>
          <li @click="toggleCategory1"><a href="#">Truyện hot</a></li>
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
        <section class="car-box">
          <header>
            <h2 @click="showdc">TRUYỆN ĐỀ CỬ</h2>
          </header>
          <nav>
            <a>Ngôn tình</a>
            <a>Truyện kiếp hiệp</a>
            <a>Truyện xuyên không</a>
            <a>Truyện cười</a>
            <a>Truyện trinh thám</a>
          </nav>
          <div class="swipe-stories">
            <ul>
              <li>
                <div v-if="showStoryHot" class="story-hot">
                  <a href="" class="thumb"
                    ><img @click="checkolong" :src="olong.image" class="over"
                  /></a>
                  <div class="infor">
                    <h3 class="title">
                      <a href="https://en.wikipedia.org/wiki/Naruto">{{
                        olong.name
                      }}</a>
                    </h3>
                    <p>Full</p>
                  </div>
                </div>
              </li>
            </ul>
            <ul v-if="showStoryUl">
              <li>
                <div class="story-hot">
                  <a href="" class="thumb"
                    ><img @click="checknaruto" :src="naruto.image" class="over"
                  /></a>
                  <div class="infor">
                    <h3 class="title">
                      <a href="https://en.wikipedia.org/wiki/Naruto">{{
                        naruto.name
                      }}</a>
                    </h3>
                    <p>Full</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="story-hot">
                  <a href="" class="thumb"
                    ><img
                      @click="checkdoraemon"
                      :src="doraemon.image"
                      class="over"
                  /></a>

                  <div class="infor">
                    <h3 class="title">
                      <a href="#">{{ doraemon.name }}</a>
                    </h3>
                    <p class="last-chapter">Full</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="car-box">
          <header>
            <a href="#">TRUYỆN DỊCH CHỌN LỌC</a>
          </header>
          <div class="grid-stories">
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
            <div class="story-gird">
              <a href="#" class="thum"
                ><img src="../assets/dragonb.jpg" class="cover" /><label
                  class="label label-type-2"
                ></label
              ></a>
              <div class="infor">
                <h3 class="title"><a href="#">Dragonball</a></h3>
                <p class="last-chapter">Full</p>
              </div>
            </div>
          </div>
        </section>
        <section class="car-box">
          <header>
            <a href="#"> TRUYỆN MỚI CẬP NHẬT</a>
          </header>
          <nav>
            <div>
              <a href="#">Ngôn tình</a>
              <a href="#">Truyện teen</a>
              <a href="#">Kiếm hiệp</a>
              <a href="#">Trinh thám</a>
              <a href="#">Truyện ma</a>
            </div>
          </nav>
          <div class="list-stories">
            <ul>
              <li class="story-list">
                <div class="infor">
                  <h3 class="title"><a href="#">Dragonball</a></h3>
                  <span class="vip-1"></span>
                  <label class="label label-type-2"></label>
                </div>
                <p class="last-chapter">Chương 500</p>
                <p class="last-update">3 phút trước</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <aside class="right-sidebar">
        <section class="card-box">
          <header>Thể loại</header>
          <div class="categories clearfix">
            <a href="#" @click="showHotCategory">Kiếm hiệp</a>
            <a href="#">Hài hước</a>
            <a href="#">Thám hiểm</a>
            <a href="#">Truyện ngược</a>
            <a href="#">Truyện sủng</a>
            <a href="#">Gia đấu</a>
            <a href="#">Đông phương</a>
            <a href="#">Bách hợp</a>
            <a href="#">Hiện đại</a>
            <a href="#">Cổ đại</a>
            <a href="#">Phương tây</a>
            <a href="#">Việt nam</a>
            <a href="#">Xuyên không</a>
            <a href="#">Truyện sắc</a>
            <a href="#">Lịch sử</a>
            <a href="#">Khoa học</a>
            <a href="#">Võng du</a>
            <a href="#">Dị giới</a>
            <a href="#">Dị năng</a>
            <a href="#">Truyện ma</a>
            <a href="#">Trinh thám</a>
            <a href="#">Truyện ngắn</a>
            <a href="#">Truyện cười</a>
            <a href="#">Tiểu thuyết</a>
            <a href="#">Đam mỹ</a>
            <a href="#">Quan trường</a>
            <a href="#">Tam quốc</a>
          </div>
        </section>
        <section class="card-box-1">
          <header>Truyện hot</header>
          <div class="categories clearfix">
            <a href="#">Tam quốc</a>
            <a href="#">Dragonball</a>
            <a href="#">One Piece</a>
            <a href="#">Conan thám tử lừng danh</a>
            <a href="#">Tý Quậy</a>
            <a href="#">Naruto</a>
            <a href="#">Boruto</a>
            <a href="#">Bát hệ triệu hồi sư</a>
            <a href="#">Côn luân ma chủ</a>
            <a href="#">Thành đại</a>
            <a href="#">Tiếu ngạo giang hồ</a>
            <a href="#">Bá khí</a>
            <a href="#">Lục môn quan</a>
            <a href="#">Bãi đất hoang sau nhà</a>
            <a href="#">Càn long</a>
            <a href="#">Thập giới</a>
            <a href="#">Ma thiên thư</a>
            <a href="#">Giang sơn</a>
            <a href="#">Dị giới</a>
            <a href="#">Dị năng</a>
          </div>
        </section>
      </aside>
    </div>
    <footer>
      <div id="footer-block">
        <div class="footer-link-icon-block">
          <div class="footer-social-media ac">
            <a target="_blank" class="icon-footer-sns" href="#"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a target="_blank" class="icon-footer-sns" href="#"
              ><i class="fa-brands fa-twitter"></i
            ></a>
            <a target="_blank" class="icon-footer-sns" href="#"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a target="_blank" class="icon-footer-sns" href="#"
              ><i class="fa-brands fa-discord"></i
            ></a>
          </div>
          <div class="footer-app ac">
            <a target="_blank" class="app-button appstore-button" href="#"
              ><img
                src="https://cdn.myanimelist.net/images/appli/badge_iOS.png"
                alt=""
            /></a>
            <a target="_blank" class="app-button googleplay-button" href="#"
              ><img
                src="https://cdn.myanimelist.net/images/appli/badge_googleplay.png"
                alt=""
            /></a>
          </div>
        </div>
        <div class="footer-link-block">
          <p class="footer-link home di-ib">
            <router-link class="a" to="/">Home</router-link>
          </p>
          <p class="footer-link di-ib">
            <router-link class="a" to="">About</router-link>
            <router-link class="a" to="">Press Room</router-link>
            <router-link class="a" to="">Support</router-link>
            <router-link class="a" to="">Advertising</router-link>
            <router-link class="a" to="">FAQ</router-link>
            <router-link class="a" to="">Teams</router-link>
            <router-link class="a" to="">Privacy</router-link>
            <router-link class="a" to="">Cookies</router-link>
            <router-link class="a" to="">Notice at Collection</router-link>
            <router-link class="a" to="">Site map</router-link>
          </p>
          <p class="footer-link login di-ib">
            <router-link class="a" to="/login">Login</router-link>
            <router-link class="a" to="/signup">Signup</router-link>
          </p>
        </div>
        <div id="copyright">
          " MyAnimeList.net is a property of MyAnimeList Co.,Ltd. ©2023 All
          Rights Reserved. "
        </div>
      </div>
    </footer>
  </main>
</template>


<script>
export default {
  data() {
    return {
      naruto: {
        id: null,
        image: "",
        name: "",
        author: "",
        genre: "",
        publish: "",
        view: null,
        complete: "",
        date: "",
        sotap: "",
      },
      doraemon: {
        id: null,
        image: "",
        name: "",
        author: "",
        genre: "",
        publish: "",
        view: null,
        complete: "",
        date: "",
        sotap: "",
      },
      olong: {
        id: null,
        image: "",
        name: "",
        author: "",
        genre: "",
        publish: "",
        view: null,
        complete: "",
        date: "",
        sotap: "",
      },
      isHighlighted: false,
      firstName: "",
      loggedIn: false,
      showStoryHot: false, // Trạng thái hiển thị phần tử "story-hot"
      showStoryUl: true, // Thêm biến để kiểm tra trạng thái đăng nhập
    };
  },

  mounted() {
    // Sử dụng fetch để truy cập dữ liệu từ server
    fetch("http://localhost:3000/naruto")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.naruto = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu naruto: " + error);
      });
    fetch("http://localhost:3000/doraemon")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.doraemon = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu doraemon: " + error);
      });
    fetch("http://localhost:3000/olong")
      .then((response) => response.json())
      .then((responseData) => {
        // Truy cập trực tiếp vào đối tượng JSON trả về
        this.olong = responseData[0]; // Giả sử có một naruto duy nhất trong phản hồi
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu olong: " + error);
      });

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      // Đã đăng nhập, lấy firstName từ Local Storage
      this.firstName = localStorage.getItem("firstName");
      this.loggedIn = true;
    }
  },
  methods: {
    checknaruto() {
      if (this.loggedIn) {
        // Đã đăng nhập, chuyển hướng đến trang đọc
        // Ở đây, bạn có thể thêm logic để truyền các tham số cần thiết vào đường dẫn
        this.$router.push({
          path: "/read",
          query: {
            firstName: this.firstName,
            name: this.naruto.name,
            image: this.naruto.image,
            author: this.naruto.author,
            genre: this.naruto.genre,
            publish: this.naruto.publish,
            view: this.naruto.view,
            complete: this.naruto.complete,
            date: this.naruto.date,
            sotap: this.naruto.sotap,
          },
        });
      } else {
        alert(
          " \t Bro cần donate mới đọc được ! \n \t 0947230931 \n \t Mb bank"
        );
        // Chưa đăng nhập, bạn có thể xử lý chuyển hướng đến trang đăng nhập ở đây
        this.$router.push("/login"); // Ví dụ: Chuyển hướng đến trang đăng nhập
      }
    },
    checkdoraemon() {
      if (this.loggedIn) {
        // Đã đăng nhập, chuyển hướng đến trang đọc
        // Ở đây, bạn có thể thêm logic để truyền các tham số cần thiết vào đường dẫn
        this.$router.push({
          path: "/read",
          query: {
            firstName: this.firstName,
            name: this.doraemon.name,
            image: this.doraemon.image,
            author: this.doraemon.author,
            genre: this.doraemon.genre,
            publish: this.doraemon.publish,
            view: this.doraemon.view,
            complete: this.doraemon.complete,
            date: this.doraemon.date,
            sotap: this.doraemon.sotap,
          },
        });
      } else {
        alert(
          " \t Bro cần donate mới đọc được ! \n \t 0947230931 \n \t Mb bank"
        );
        // Chưa đăng nhập, bạn có thể xử lý chuyển hướng đến trang đăng nhập ở đây
        this.$router.push("/login"); // Ví dụ: Chuyển hướng đến trang đăng nhập
      }
    },
    checkolong() {
      if (this.loggedIn) {
        // Đã đăng nhập, chuyển hướng đến trang đọc
        // Ở đây, bạn có thể thêm logic để truyền các tham số cần thiết vào đường dẫn
        this.$router.push({
          path: "/read",
          query: {
            firstName: this.firstName,
            name: this.olong.name,
            image: this.olong.image,
            author: this.olong.author,
            genre: this.olong.genre,
            publish: this.olong.publish,
            view: this.olong.view,
            complete: this.olong.complete,
            date: this.olong.date,
            sotap: this.olong.sotap,
          },
        });
      } else {
        alert(
          " \t Bro cần donate mới đọc được ! \n \t 0947230931 \n \t Mb bank"
        );
        // Chưa đăng nhập, bạn có thể xử lý chuyển hướng đến trang đăng nhập ở đây
        this.$router.push("/login"); // Ví dụ: Chuyển hướng đến trang đăng nhập
      }
    },
    showHotCategory() {
      // Hiển thị phần tử "story-hot" và ẩn phần tử "story-ul"
      this.showStoryHot = true;
      this.showStoryUl = false;
    },
    showdc() {
      this.showStoryHot = false;
      this.showStoryUl = true;
    },
    toggleCategory() {
      // Đảo ngược trạng thái nhấp nháy khi click vào thể loại
      this.isHighlighted = !this.isHighlighted;

      // Hiển thị hoặc ẩn <section> ở đây
      const box = document.querySelector(".card-box");
      const box1 = document.querySelector(".card-box-1");
      if (box) {
        if (this.isHighlighted) {
          box.style.backgroundColor = "yellow"; // Màu nền vàng
          box.style.display = "block"; // Hiển thị section
          box1.style.display = "none"; // Ẩn section
          // Sử dụng setTimeout để quay về màu ban đầu sau 2 giây
          setTimeout(() => {
            box.style.backgroundColor = ""; // Xóa màu nền
            box1.style.display = "block"; // hiện section
          }, 2000);
        }
      }
    },
    toggleCategory1() {
      // Đảo ngược trạng thái nhấp nháy khi click vào thể loại
      this.isHighlighted = !this.isHighlighted;

      // Hiển thị hoặc ẩn <section> ở đây
      const box = document.querySelector(".card-box");
      const box1 = document.querySelector(".card-box-1");
      if (box1) {
        if (this.isHighlighted) {
          box1.style.backgroundColor = "yellow"; // Màu nền vàng
          box1.style.display = "block"; // Hiển thị section
          box.style.display = "none"; // Ẩn section
          setTimeout(() => {
            box1.style.backgroundColor = ""; // Xóa màu nền
            box.style.display = "block";
          }, 2000);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
}
// truyen de cu
.main-col {
  flex: 0 0 72%;
  max-width: 72%;
}
.car-box {
  background: #fff;
  margin-bottom: 12px;
  border-top: 1px solid #e5e6e9;
  border-bottom: 1p solid#e5e6e9;
  h2 {
    cursor: pointer;
  }
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

  nav {
    padding: 5px;
    border-bottom: 1px dashed #e5e6e9;
    text-align: center;
    display: flex;
    width: 100%;

    a {
      font-size: 13px;
      letter-spacing: -0.5px;
      display: inline-block;
      padding: 5px;
      background: #555;
      color: #fff;
      margin-bottom: 5px;
      border-radius: 2px;
      flex-shrink: 0;
      margin-right: 10px;
    }
  }
  .swipe-stories {
    overflow-x: hidden;
    position: relative;

    width: 100%;

    ul {
      display: flex;
      -webkit-transition: all 0.5s;
      -webkit-transform: translateX(0);
      list-style: none;

      li {
        width: 25%;
        flex-shrink: 0;
        padding: 0 5px;
        .story-hot {
          background: #fff;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
          position: relative;
          a {
            color: #016eb2;
            text-decoration: none;
          }
          .thumb {
            display: block;
            img {
              width: 100%;
              height: auto;
              display: block;
            }
          }
          .infor {
            padding: 8px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 600;
}

// dich chon loc
.grid-stories {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.story-gird {
  padding: 10px;
  width: 152px;
  height: auto;
  .thum {
    display: block;
    position: relative;

    img {
      width: 100%;
      height: auto;
      display: block;
      max-width: 100%;
      vertical-align: middle;
    }
    .label-type-2 {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 45px;
      height: 52px;
      line-height: 36px;
      background: url(https://img.dtruyen.com/badge2.svg) no-repeat;
      background-size: contain;
      color: #fff;
      font-weight: bold;
      text-align: center;
      font-size: 1.2em;
    }
  }
  .infor {
    padding: 8px;
    text-align: center;
  }
}

//list ds
ul {
  list-style: none;
}
.story-list {
  display: flex;
  padding: 8px 10px;
  border-bottom: 1px dashed #ddd;
  justify-content: space-between;

  .infor {
    .title {
      font-size: 15px;
      line-height: 14px;
      font-weight: 500;
      display: inline;
      letter-spacing: -0.5px;
      text-transform: capitalize;
      a {
        color: #444;
        text-decoration: none;
      }
    }

    .label-type-2::before {
      content: "DỊCH";
      color: #e74c3c;
      border: 1px solid #e74c3c;
      width: 27px;
      font-size: 13px;
      font-weight: 500;
      padding: 0 3px;
      letter-spacing: -1px;
      margin-left: 5px;
    }
  }
  .last-chapter {
    font-size: 13px;
    color: #707070;
    text-align: right;
    flex-shrink: 0;
  }
  .last-updated {
    padding-left: 20px;
    width: 100px;
    font-size: 13px;
    color: #707070;
    text-align: right;
    flex-shrink: 0;
  }
}

//coment
#footer-block {
  background-color: #2e51a2;
  color: #fff;
  font-family: Avenir, lucida grande, tahoma, verdana, arial, sans-serif;
  padding: 32px 0 15px;
  text-align: center;
  display: block;
  width: 100%;
  max-width: 1300px;
  margin: auto;

  .footer-link-icon-block {
    display: block;
    margin: 0 auto;
    padding: 0;
    position: relative;
    width: 650px;
  }
  .footer-social-media {
    display: inline-block;

    .icon-footer-sns {
      color: #fff;
      font-size: 28px;
      margin-right: 8px;
      vertical-align: middle;

      .fab,
      .fa-brands {
        font-weight: 400;
      }
      .fa-fw {
        text-align: center;
        width: 1.25em;
      }
      .fa-facebook-square:before {
        content: "\f082";
      }
      .fa-twitter-square:before {
        content: "\f081";
      }
      .fa-instagram-square:before {
        content: "\e055";
      }
      .fa-discord:before {
        content: "\f392";
      }
    }
  }

  .footer-social-media:before {
    color: #9caed9;
    content: "Follow Us";
    display: inline-block;
    font-size: 12px;
    line-height: 30px;
    margin-right: 20px;
    white-space: nowrap;
  }
  .footer-app {
    display: inline-block;

    .app-button {
      cursor: pointer;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin-right: 10px;
      opacity: 1;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      vertical-align: middle;

      img {
        height: 30px;
        border: 0;
      }
    }
  }
  .footer-app:before {
    color: #9caed9;
    content: "Get the App";
    display: inline-block;
    font-size: 12px;
    line-height: 30px;
    margin-left: 60px;
    margin-right: 20px;
    white-space: nowrap;
  }
  //duoi
  .footer-link-block {
    background-image: url(/images/footer/footer-sns-border.png?v=1634263200);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 720px px 1px;
    padding-bottom: 24px;
    padding-top: 32px;
  }
  .footer-link.home {
    border-right: #9caed9 1px solid;
    margin-right: 18px;
    padding-right: 20px;
  }
  .footer-link .a {
    color: #fff;
    font-size: 12px;
    margin-right: 18px;
  }
  .footer-link a {
    color: #fff;
    font-size: 12px;
    margin-right: 18px;
  }
  .footer-link.login {
    border-left: #9caed9 1px solid;
    margin-left: 18px;
    padding-left: 20px;
  }
  .di-ib {
    display: inline-block !important;
  }
  #copyright {
    padding-top: 3px;
    text-align: center;
    font-size: 13px;
  }
}

// ben phai
.right-sidebar {
  flex: 0 0 25%;
  max-width: 25%;
  margin-left: 20px;
  width: auto;
  margin-right: 20px;
  .card-box,
  .card-box-1 {
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

    .categories {
      text-align: center;
      background-color: white;
      padding: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr; /* Tạo hai cột bằng cách chia đều không gian */
      grid-gap: 10px; /* Tạo khoảng cách giữa các phần tử */
    }

    .categories a {
      background-color: #f2f2f2;
      padding: 5px 10px;
      text-decoration: none;
      color: #333;
      border-radius: 5px;
      display: block; /* Đảm bảo liên kết nằm trên một dòng */
    }

    .categories a:hover {
      background-color: #333;
      color: white;
    }
  }
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
