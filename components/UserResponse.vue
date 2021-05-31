<template>
  <div>
            <div class="second-col px-4 pt-5 mt-5 pb-4">
            <div>
            <div class="d-flex">
              <p>Review Update</p>
            </div>
            <div class=" mb-2"  style="background: rgba(0, 0, 0, 0.1);height: 1px;">
                    </div>
            </div>

           <div class="media_">
          <b-media>
            <template #aside>
              <img src="~/assets/img/vector4.png" class="img-fluid p-2 mt-2 img1" alt="Media Aside">
            </template>

            <h6 class="pt-3">User 1</h6>
            <div class="d-flex">
                <div><img src="~/assets/img/emoji1.png" class="img-fluid" alt=""></div>
            <p class="pt-1 ml-2" style="color: #E57718;">Positive Opinion</p>
            <div><img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt=""></div>
            </div>
            <p class="firstp">Giving Great Values  |  Amazing  |  Good...</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....</p>

            <!-- b-[Optional: add media children here for nesting] -->

          </b-media>


           <b-media>
            <template #aside>
              <img src="~/assets/img/vector4.png" class="img-fluid p-2 mt-2 img2" alt="Media Aside">
            </template>

            <h6 class="pt-3">User 2</h6>
            <div class="d-flex">
            <div><img src="~/assets/img/emoji2.png" class="img-fluid" alt=""></div>
               <p class="pt-1 ml-2" style="color: #D91925;">NEGATIVE OPINION</p>
            <div><img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt=""></div>
            </div>
            <p class="firstp">Vey Bad | Too Poor</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....</p>

            <!-- b-[Optional: add media children here for nesting] -->

          </b-media>


           <b-media>
            <template #aside>
              <img src="~/assets/img/vector4.png" class="img-fluid p-2 img3 mt-2" alt="Media Aside">
            </template>

            <h6 class="pt-3">User 3</h6>
            <div class="d-flex">
            <div><img src="~/assets/img/emoji3.png" class="img-fluid" alt=""></div>
               <p class="pt-1 ml-2" style="color: #D91925;">NEUTRAL OPINION</p>
                <div><img src="~/assets/img/Frame20.png" class="img-fluid ml-3" alt=""></div>
            </div>
            <p class="firstp">Whatever | I like it</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>

            <!-- b-[Optional: add media children here for nesting] -->

          </b-media>
           </div>
            </div>
  </div>
</template>

<script>
export default {
  name: "UserResponse",
}
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

.second-col{
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
    background: #E57718;
    box-shadow: 0px 20px 20px #00000026;
    opacity: 1;
    width: 50%;
    padding: 12px 0px 12px;
    border: 0;
    border-radius: 25px;
    margin-left: 50%;
}

.img1 {
 background: #E57718;
border-radius: 19.5px;
}

.img2 {
  background: rgba(241, 19, 139, 0.87);
border-radius: 19.5px;
}
.img3 {
  background: #18E5B4;
  border-radius: 19.5px;
}

.firstp {
  color: #626D73;
}
</style>
