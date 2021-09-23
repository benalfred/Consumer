<template>
  <div class="pl-md-5 px-md-4 px-3">
    <div class="row">
      <div class="col-md-8  col-lg-9 pt-5">
        <div class="card">
          <b-tabs content-class="p-4" justified class="nav-tabs-custom">
            <b-tab active>
              <template v-slot:title>
                <i class="uil uil-comment-alt-notes font-size-20"></i>
                <span class="d-none d-sm-block">Referral Code</span>
              </template>
              <div class=" w-100">
                <div class="card-body px-md-4">
                  <h4 class="pb-4 mb-3">Referrals</h4>

                  <div class="row">
                    <div class="col-lg-9 mb-4 mb-lg-0"><strong>Referral Code: </strong></div>
                    <div class="col-lg-3  mb-4 mb-lg-0">
                      <button class="btn btn-outline-primary text-uppercase small btn-sm"

                      >
                        copyCodeText
                      </button>
                      <button type="button" class="btn btn-sm d-md-none btn-outline-primary ml-3" style="border-color: #094063; color: #094063"
                              @click="shareCode"
                      >Share</button>
                    </div>
                  </div>

                  <div class=" d-none d-md-block mb-4 mt-2">
                    <!-- AddToAny BEGIN -->
                    <div class="a2a_kit a2a_kit_size_32 a2a_default_style"  :data-a2a-title="'Get lands for as low as N250 per day using my referral code : ' + $auth.user.referral_code +' You can use this code to join here'">
                      <a class="a2a_button_facebook"></a>
                      <a class="a2a_button_twitter"></a>
                      <a class="a2a_button_whatsapp"></a>
                      <a class="a2a_button_linkedin"></a>
                      <a class="a2a_button_telegram"></a>
                    </div>
                    <script async src="https://static.addtoany.com/menu/page.js"></script>
                    <!-- AddToAny END -->
                  </div>
                  <hr>
                  <div class="row mt-4">
                    <div class="col-lg-9 mb-4 mb-lg-0"><strong>Referral Link: </strong>getReferralLink</div>
                    <div class="col-lg-3 ">
                      <button class="btn btn-outline-primary text-uppercase small btn-sm"
                      >copyLinkText</button>
                      <button type="button" class="btn  d-md-none btn-sm btn-outline-primary ml-3" style="border-color: #094063; color: #094063"
                              @click="shareLink"
                      >Share</button>
                    </div>
                  </div>

                  <div class=" d-none d-md-block mt-2">
                    <!-- AddToAny BEGIN -->
                    <div class="a2a_kit a2a_kit_size_32 a2a_default_style"   data-a2a-title="Get lands for as low as N250 per day using this link">
                      <a class="a2a_button_facebook"></a>
                      <a class="a2a_button_twitter"></a>
                      <a class="a2a_button_whatsapp"></a>
                      <a class="a2a_button_linkedin"></a>
                      <a class="a2a_button_telegram"></a>
                    </div>
                    <script async src="https://static.addtoany.com/menu/page.js"></script>
                    <!-- AddToAny END -->
                  </div>
                  <div class="spacer"></div>
                  <div>
                    <div>
                      Earn
                    </div>
                    <div class="d-md-flex align-items-center">
                      <div class="display-4 mr-1 text-blue font-weight-bold">₦500</div>
                      <div  > monthly continuously for minimum of 2years on every slot bought by your referrals</div>
                    </div>
                  </div>
                  <div class="spacer"></div>
                  <hr>
                  <p>They should use the referral code or link to signup</p>
                </div>
              </div>
            </b-tab>

            <b-tab class="">
              <template v-slot:title>
                <i class="uil uil-comment-alt-notes font-size-20"></i>
                <span class="d-none d-sm-block">All Referrals</span>
              </template>

              <h4 class="mb-4 pb-3">My Referrals</h4>
              <div class="row mb-2 d-none d-lg-flex justify-content-between">
                <p class="col-lg-4">Name</p>
                <p class="col-lg-4 text-center">Earned</p>
                <p class="col-lg-4 text-center">Referred On</p>
              </div>
              <div  class="d-flex bg-white mb-4 align-items-center justify-content-center" >
                <div>
                  <video class="embed-responsive mw-md-250" muted loop autoplay>
<!--                    <source src="~/assets/images/empty.mp4" class="img-fluid">-->
                  </video>
                  <p class="text-center">Nothing to show</p>
                </div>
              </div>

            </b-tab>
          </b-tabs>
        </div>
      </div>


      <div class="col-md-4 col-lg-3 pt-5 inner-side">
        <div class="mb-4">
          <div class="card custom-card mb-4">
            <div class="card-body">
              <h5 class="text-center">Balance</h5>
              <p class="small">Amount left in your wallet, can be withdrawn or spent on the platform.</p>
              <p class="h3">₦10</p>
            </div>
          </div>
          <div class="card custom-card">
            <div class="card-body">
              <h5 class="text-center">Withdrawn</h5>
              <p class="small">Amount previously withdrawn</p>
              <p class="h3">₦200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "refer",
  data() {
    return {

    }
  },
  mounted() {

  },

}
</script>

<style scoped>
.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem !important;
  font-size: 80% !important;
  line-height: 1.5 !important;
  border-radius: 0.2rem !important;
}

.custom-card {
  border: 1px solid #004dff;
  background-color: rgba(0, 77, 255, 0.1);
  color: #004dff;
  background-image: url(https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif);
  overflow: hidden;
}

.custom-card .card-body {
  background-color: rgba(255, 255, 255, 0.7);
}

.nav-tabs-custom {
  border-bottom: 2px solid gray !important;
}

.nav-tabs-custom .nav-item .nav-link.active {
  color: #5b73e8 !important;
}

.nav-tabs-custom .nav-item .nav-link {
  border: none !important;
  color: gray;
}

.nav-tabs-custom .nav-item .nav-link.active {
  border-bottom: 2px solid #5b73e8 !important;
}

.nav-tabs-custom .nav-item .nav-link.active:after {
  transform: scale(1) !important;
}.nav-tabs-custom {
   border-bottom: 2px solid gray !important;
 }

.nav-tabs-custom .nav-item .nav-link.active {
  color: #5b73e8 !important;
}

.nav-tabs-custom .nav-item .nav-link {
  border: none !important;
  color: gray;
}

.nav-tabs-custom .nav-item .nav-link.active {
  border-bottom: 2px solid #5b73e8 !important;
}

.inner-side {
  box-shadow: 4px 24px 40px 0 rgba(192, 204, 241, 0.48);
}
</style>
