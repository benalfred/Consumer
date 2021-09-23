<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-5">
          <b-media>
            <template #aside>
              <img :src="Logo" class="img-fluid logo-img" alt="Media Aside" />
            </template>

            <h2 class="pt-3">{{ Name }} Company</h2>
            <p class="pt-1">
              {{ Description }}
            </p>
          </b-media>

          <b-media class="mt-4">
            <template #aside>
              <p class="pt-2">RATE</p>
            </template>

            <div class="mb-4 mt-4" style="background: #626d73; height: 1px">
              <div class="mt-2 line"></div>
            </div>
          </b-media>

          <div class="d-flex" style="padding: 0px 10px 0px">
            <div class="emoji" v-for="ratingg in ratingsData" :key="ratingg.id">
              <p
                :class="[rating != ratingg.Id ? 'active' : '']"
                v-if="ratingMethod(ratingg.PreferredName,ratingg.Id)"
                @click="displayRatingTags(ratingg.Id)"
              >
                {{ ratingMethod(ratingg.PreferredName,ratingg.Id).emoji }}
              </p>
            </div>
          </div>

          <b-media class="mt-4">
            <template #aside>
              <p class="pt-2">Features</p>
            </template>

            <div class="mb-4 mt-4" style="background: #626d73; height: 1px">
              <div class="mt-2 line"></div>
            </div>

            <!-- b-[Optional: add media children here for nesting] -->
          </b-media>

          <div class="row" v-if="ratingTags.length && !ratingTagSpinner">
            <b-col md="4" v-for="tag in ratingTags" :key="tag.Id" class="mb-2">
              <div
                @click="setRatingTagId(tag.Id)"
                :class="[colorChecking(tag.Id) ? 'bg-class' : '']"
                class="card-subtitle mb-2 px-3 p-2 text-muted text-center"
                style="
                  border: 1px solid #81959e;
                  border-radius: 50px;
                  font-size: 14px;
                  color: #81959e;
                  cursor: pointer;
                "
              >
                {{ tag.Name }}
              </div>
            </b-col>
          </div>

          <div class="row" v-if="!ratingTags.length && !ratingTagSpinner">
            <b-col md="4">
              <div
                class="card-subtitle mb-2 px-3 p-2 text-muted text-center"
                style="
                  border: 1px solid #81959e;
                  border-radius: 50px; logo-main
                  font-size: 14px;

                  color: #81959e;
                "
              >
                click a rating
              </div>
            </b-col>
          </div>
          <b-spinner
            v-if="ratingTagSpinner"
            label="Spinning"
            style="margin-left: 49%"
          ></b-spinner>

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
              v-model="Comment"
              placeholder="Enter something..."
              rows="6"
              max-rows="6"
            ></b-form-textarea>
          </div>

          <div class="mx-0 justify-content-end">
            <div>
              <b-form-group class="newpost mt-3">
                <button
                  :disabled="!Comment || !rating || ratingTagId.length != 3"
                  @click="createOpinion"
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

        <b-col md="7" class="section_ px-5 pt-5 mt-3">
          <div>
            <div class="second-col px-4 mb-5 pt-4 pb-4" v-if="opinions.length && !spinner">
              <span
                class="text-center pt-1 text-white"
                style="
                  left: calc(83% - 67.103px / 2 - 55.52px);
                  top: 80px;
                  background: #0083ca;
                  position: absolute;
                  width: 151px;
                  height: 32px;
                "
                >LATEST OPINON</span
              >
              <b-media v-for="opinion in opinions" :key="opinion.Id" class="mt-5">
                <template #aside>
                  <img v-if="opinion.Picture"
                    :src="opinion.Picture"
                    class="img-fluid p-2 mt-2 img1"
                    alt="Media Aside"
                  />
                  <img v-else
                    src="~/assets/img/vector4.png"
                    class="img-fluid p-2 mt-2 img1"
                    alt="Media Aside"
                  />
                </template>

                <h6 class="pt-3">{{ opinion.Firstname }} {{ opinion.Surname }}</h6>
                <div class="d-flex">
                  <div v-if="ratingMethod2(opinion.Rating)">
                    {{ratingMethod2(opinion.Rating).emoji}}
                  </div>
                  <p class="pt-1 ml-2" style="color: #e57718" v-if="ratingMethod2(opinion.Rating)">{{ratingMethod2(opinion.Rating).category}}</p>
                  <div>
                    <span class="ml-3"> {{ daysjs(opinion.SubmittedDate).fromNow()  }}</span>
                  </div>
                </div>
                <p class="firstp">
                  <span v-for="tag in opinion.Tags" :key="tag.Id"> {{ tag }} |</span>...
                </p>
                <p>
                  {{ opinion.Comment }}
                </p>
                <!-- b-[Optional: add media children here for nesting] -->
              </b-media>
            </div>
            <div class="second-col px-4 pt-4 pb-4" v-if="!opinions.length && !spinner">
              <div class="row justify-content-center d-flex my-4">
                <div class="col-4 mt-3">
                  <img
                    src="~/assets/img/comment-icon.png"
                    class="img-fluid no-opinion-img"
                    alt=""
                  />
                  <p class="text-center">no opinion</p>
                </div>
              </div>
            </div>
            <b-spinner
              v-if="spinner"
              label="Spinning"
              style="margin-left: 49%"
            ></b-spinner>
          </div>
        </b-col>
      </div>
    </div>

    <b-modal id="explore" size="lg" hide-footer scrollable centered  title="Take a survey with other sectors!">
     <div class="d row ">
          <div
            class="col-md-3"
            v-for="sector in industries"
            :key="sector.Id"
            style="cursor: pointer"
            @click="linkToIndustries(sector)"
          >
            <img v-if="sector.Logo" :src="sector.Logo" class="rounded img-fluid d-flex justify-content-center mx-auto" alt="" />
            <img v-else src="~/assets/img/dell-icon.png" class="img-fluid d-flex justify-content-center mx-auto" alt="" />
            <div class="company-name text-center  mt-2" style="">
              <p class="p-2 text-center" style="color:#fff">{{ sector.Name }}</p>
            </div>
          </div>
        </div>
  </b-modal>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  layout: "headerr",
  async fetch() {
    await this.getRatings();
    await this.fetchCompanyDetails();
  },
  middleware: ['auth','account_setup'],
  mounted() {
    this.daysjs = dayjs
    this.allOpinions()
    this.fetchSectors()
    this.$bvModal.show('explore')
  },
  data() {
    return {
      opinions: [],
      daysjs: dayjs,
      spinner: false,
      Logo: null,
      Description: null,
      rating: null,
      ratingEmoji: [
        {Id:1, PreferredName: "Very Bad", emoji: "😡", category:"Negative Opinion" },
        {Id:2, PreferredName: "Bad", emoji: "😞", category:"Negative Opinion" },
        {Id:3, PreferredName: "Fair", emoji: "😑", category:"Fair Opinion" },
        {Id:4, PreferredName: "Good", emoji: "😊",category:"Positive Opinion" },
        {Id:5, PreferredName: "Very Good", emoji: "😍", category:"Positive Opinion" },
      ],
      ratingsData: [],
      tagsData: [
        // {Id:1,Name:'sad',Rating:1},
        // {Id:2,Name:'angry',Rating:1},
        // {Id:3,Name:'bad',Rating:1}
      ],
      pageForOpinions: 1,
      pageForOpinions2: 1,
      Comment: null,
      pageSize: 10,
      industries:[],
      ratingTagSpinner: false,
      Name: this.$route.params.name,
      Description: null,
      companyId: this.$route.params.id,
      pageSize:1,
      page:1,
      ratingTagId: [],
      ratingTags: [],
      totalRowsForOpinion: 0,
      opinionsSpinner: false,
    };
  },
  methods: {
    colorChecking(value) {
      let foundEmoji = this.ratingTagId.find((emoji) => emoji === value);
      return foundEmoji;
    },

    async setRatingTagId(tag) {
      let found = this.ratingTagId.find((Id) => Id === tag);
      if (found) {
        let newArray = this.ratingTagId.filter((Id) => Id != found);
        this.ratingTagId = newArray;
      } else if (this.ratingTagId.length === 3) {
        return;
      } else {
        this.ratingTagId.push(tag);
      }
    },
     linkToIndustries(sector) {
      this.$router.push(`/industry/${sector.Id}/${sector.Name}`);
    },
     async fetchSectors() {
      this.pageSize -= 1;
      try {
        const response = await this.$axios.get(
          `Industries/GetSemiLiteIndustries?page=${this.page}&pageSize=${this.pageSize}`
        );
       this.industries = response.data.Results
      } catch (e) {
        this.spinner = false
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async displayRatingTags(id) {
      this.ratingTagSpinner = true;
      try {
        this.rating = id;
        const response = await this.$axios.get(
          `/Opinions/GetRatingTags?rating=${this.rating}`
        );
        this.ratingTags = response.data;
        this.ratingTagSpinner = false;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async fetchCompanyDetails() {
      try {
        const response = await this.$axios.get(
          `Industries/GetPublicCompanyDetails?companyId=${this.$route.params.id}`
        );
        this.Description = response.data.Description;
        this.Logo = response.data.Logo;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async createOpinion() {
      try {
        const response = await this.$axios.post("/Opinions/SubmitOpinion", {
          companyId: parseInt(this.$route.params.id),
          rating: this.rating,
          RatingTagIds: this.ratingTagId,
          Comment: this.Comment,
        });
         await this.allOpinions()
        this.Comment = null;
        this.rating = null;
        this.ratingTagId = [];
        this.$store.commit("notifications/success", "opinion submitted successfully, Thank you!!");
        this.makeToast()
       setTimeout(() => {
        this.$bvModal.show('explore')
       }, 2000);
      } catch (e) {
        swal({
          title: "Error!",
          text: "Something went wrong!",
          icon: "warning",
          dangerMode: true,
        });
      }
    },
    ratingMethod(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.PreferredName === value);
      return foundEmoji;
    },
    ratingMethod2(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.Id === value);
      return foundEmoji;
    },
    async allOpinions() {
      this.spinner = true;
      try {
        const opinions = await this.$axios.get(
          `/Opinions/GetPublicOpinions?companyId=${this.$route.params.id}`
        );
        this.opinions = opinions.data;
        this.spinner = false;
      } catch (e) {
        console.log(e)
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
    async getRatings() {
      try {
        const ratings = await this.$axios.get("settings/GetRatings");
        this.ratingsData = ratings.data;
      } catch (e) {
        this.$store.commit("notifications/error", "something went wrong");
        this.makeToast();
      }
    },
     makeToast() {
      this.$bvToast.toast(`${this.$store.state.notifications.message}`, {
        title: this.$store.state.notifications.type,
        autoHideDelay: 5000,
        variant: this.$store.state.notifications.type === "error" ? "danger" : "info",
        solid: true,
      });
    },
  },
};
</script>

<style scoped>
.active {
  opacity: 0.3;
}


.logo-img {
  width: 80px;
}

.bg-class {
color: #fff!important;
  background-color: #e57718;
}

.company-name {
  background: #07072f;
  width: 170px;
  color: white;
  margin: 0px 0px 0px;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  box-shadow: 0px 12px 12px #00000029;
}

.company-image img {
  height: 59px;
}

@media screen and (min-width: 750px) {
  .no-opinion-img {
    margin-left: 50px;
  }
}
.section_ {
  overflow: hidden;
  overflow-y: scroll;
  height: 500px;
}
.second-col {
  background: #ffffff;
  border-radius: 10px;
}
.section_ {
}

.section_::-webkit-scrollbar {
  width: 10px;
  border-radius: 50px;
}

.emoji p {
  font-size: 18px;
  cursor: pointer;
  padding: 0px 7px 0px;
}

/* Track */
.section_::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.section_::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.section_::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

@media screen and (min-width: 600px) {
  .section_ {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
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

.emoji {
  width: 150px;
}

.emoji p {
  font-size: 34px;
  cursor: pointer;
}

.rounded {
  height: 70px;
  width: 100px
}
</style>
