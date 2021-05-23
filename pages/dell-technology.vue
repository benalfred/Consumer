<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-5">
          <b-media>
            <template #aside>
              <img src="~/assets/img/dellpic.png" class="img-fluid" alt="Media Aside" />
            </template>

            <h2 class="pt-3">Dell Technology</h2>
            <p class="pt-1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor ut labore et dolore magna aliqua.
            </p>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>

          <b-media class="mt-4">
            <template #aside>
              <p class="pt-2">RATE</p>
            </template>

            <div class="mb-4 mt-4" style="background: #626d73; height: 1px">
              <div class="mt-2 line"></div>
            </div>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>

          <div>
            <img src="~/assets/img/mainreview.png" class="img-fluid" alt="" />
          </div>

          <b-media class="mt-4">
            <template #aside>
              <p class="pt-2">Description</p>
            </template>

            <div class="mb-4 mt-4" style="background: #626d73; height: 1px">
              <div class="mt-2 line"></div>
            </div>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>

          <div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="6"
              max-rows="6"
            ></b-form-textarea>
          </div>
          <div class="mx-0 justify-content-end">
            <div>
              <b-form-group class="newpost mt-3">
                <button
                  class="mt-2 btn-sacademy"
                  style="font-size: 16px"
                  type="submit"
                  value="Send"
                >
                  Post Opinion
                </button>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="col-md-7 section_ px-5 pt-5 mt-3">
          <div class="second-col px-4 pt-4 pb-4">
            <b-media>
              <template #aside>
                <img
                  src="~/assets/img/vector4.png"
                  class="img-fluid p-2 mt-2 img1"
                  alt="Media Aside"
                />
              </template>

              <h6 class="pt-3">User 1</h6>
              <div class="d-flex">
                <div><img src="~/assets/img/emoji1.png" class="img-fluid" alt="" /></div>
                <p class="pt-1 ml-2" style="color: #e57718">Positive Opinion</p>
                <div>
                  <img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt="" />
                </div>
              </div>
              <p class="firstp">Giving Great Values | Amazing | Good...</p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat....
              </p>

              <!-- b-[Optional: add media children here for nesting] -->
            </b-media>
            <div class="mt-3 mb-2" style="background: #626d73; height: 1px"></div>

            <b-media>
              <template #aside>
                <img
                  src="~/assets/img/vector4.png"
                  class="img-fluid p-2 mt-2 img2"
                  alt="Media Aside"
                />
              </template>

              <h6 class="pt-3">User 2</h6>
              <div class="d-flex">
                <div><img src="~/assets/img/emoji2.png" class="img-fluid" alt="" /></div>
                <p class="pt-1 ml-2" style="color: #d91925">NEGATIVE OPINION</p>
                <div>
                  <img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt="" />
                </div>
              </div>
              <p class="firstp">Vey Bad | Too Poor</p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat....
              </p>

              <!-- b-[Optional: add media children here for nesting] -->
            </b-media>

            <div class="mt-3 mb-2" style="background: #626d73; height: 1px"></div>

            <b-media>
              <template #aside>
                <img
                  src="~/assets/img/vector4.png"
                  class="img-fluid p-2 img3 mt-2"
                  alt="Media Aside"
                />
              </template>

              <h6 class="pt-3">User 2</h6>
              <div class="d-flex">
                <div><img src="~/assets/img/emoji3.png" class="img-fluid" alt="" /></div>
                <p class="pt-1 ml-2" style="color: #d91925">NEUTRAL OPINION</p>
                <div>
                  <img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt="" />
                </div>
              </div>
              <p class="firstp">Whatever | I like it</p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua...
              </p>

              <!-- b-[Optional: add media children here for nesting] -->
            </b-media>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "headerr",
  mounted() {
    this.getAllOpinionsAndReactions();
  },
  data() {
    return {
      opinionsData: [],
      ratingsData: [],
      tagsData: [
        // {Id:1,Name:'sad',Rating:1},
        // {Id:2,Name:'angry',Rating:1},
        // {Id:3,Name:'bad',Rating:1}
      ],
    };
  },
  methods: {
    async getAllOpinionsAndReactions() {
      try {
        const opinions = await this.$axios.get("settings/GetRatings");
        console.log(opinions.data);
        this.ratingsData = opinions.data;
      } catch (e) {
        alert("error");
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.section_ {
  overflow: hidden;
  overflow-y: scroll;
  height: 750px;
}
.second-col {
  background: #ffffff;
  border-radius: 10px;
}
.section_ {
  background: #626d73;
}

@media screen and (min-width: 600px) {
  .section_ {
    background: #626d73;
    position: relative;
    left: 100px;
  }
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 60px;
  /* identical to box height, or 167% */

  color: #656565;
}

p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  color: #000000;
}

.btn-sacademy {
  color: #fff !important;
  background: #e57718;
  box-shadow: 0px 20px 20px #00000026;
  opacity: 1;
  width: 50%;
  padding: 12px 0px 12px;
  border: 0;
  border-radius: 25px;
  margin-left: 50%;
}

.img1 {
  background: #e57718;
  border-radius: 19.5px;
}

.img2 {
  background: rgba(241, 19, 139, 0.87);
  border-radius: 19.5px;
}

.img3 {
  background: #18e5b4;
  border-radius: 19.5px;
}

.firstp {
  color: #626d73;
}
</style>
