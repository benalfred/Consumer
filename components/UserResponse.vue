<template>
  <div>
    <div class="media_">
      <b-spinner
        v-if="spinner"
        label="Spinning"
        style="margin-left: 49%"
      ></b-spinner>
    </div>
    <div class="media_" v-if="opinions.length && !spinner">
      <b-media v-for="opinion in opinions" :key="opinion.Id">
        <template #aside>
          <img
            src="~/assets/img/vector4.png"
            class="img-fluid p-2 mt-2 img1"
            alt="Media Aside"
          />
        </template>

        <h6 class="pt-3">{{ opinion.Firstname }} {{ opinion.Surname }}</h6>
        <div class="d-flex">
          <div v-if="ratingMethod2(opinion.Rating)">
            {{ ratingMethod2(opinion.Rating).emoji }}
          </div>
          <p class="pt-1 ml-2" style="color: #e57718" v-if="ratingMethod2(opinion.Rating)"> {{ ratingMethod2(opinion.Rating).category }}</p>
          <div>
          <span class="ml-3">{{daysjs(opinion.SubmittedDate).fromNow()}}</span>
          </div>
        </div>
        <p class="firstp">
          <span v-for="tag in opinion.Tags" :key="tag.Id"> {{ tag }} |</span>
        </p>
        <p>
          {{ opinion.Comment }}
        </p>

        <!-- b-[Optional: add media children here for nesting] -->
      </b-media>
    </div>
    <div class="media_" v-if="!opinions.length && !spinner">
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
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  name: "UserResponse",
  mounted() {
 this.daysjs = dayjs
  },
  props: {
    opinions: {
      type: Array,
      default: () => {
        return [];
      },
    },
    spinner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ratingEmoji: [
        {Id:1, PreferredName: "Very Bad", emoji: "😡", category:"Negative Opinion" },
        {Id:2, PreferredName: "Bad", emoji: "😞", category:"Negative Opinion" },
        {Id:3, PreferredName: "Fair", emoji: "😑", category:"Fair Opinion" },
        {Id:4, PreferredName: "Good", emoji: "😊",category:"Positive Opinion" },
        {Id:5, PreferredName: "Very Good", emoji: "😍", category:"Positive Opinion" },
      ],
      daysjs: dayjs,
    };
  },
  methods: {
    ratingMethod(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.PreferredName === value);
      return foundEmoji;
    },
    ratingMethod2(value) {
      let foundEmoji = this.ratingEmoji.find((emoji) => emoji.Id === value);
      return foundEmoji;
    },
  },
};
</script>

<style scoped>
.media_ {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 450px;

}

.media_::-webkit-scrollbar {
  width: 10px;
  border-radius: 50px;
}

.emoji p {
  font-size: 18px;
  cursor: pointer;
  padding: 0px 7px 0px;
}

/* Track */
.media_::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 50px;
}

/* Handle */
.media_::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

/* Handle on hover */
.media_::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 50px;
}

.second-col {
  background: #ffffff;
  box-shadow: -1px 9px 18px rgba(21, 11, 35, 0.1);
  border-radius: 5px;
}

h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 60px;
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
