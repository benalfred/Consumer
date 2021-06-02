<template>
    <div class="pl-2">
        <div class="nav-list  user-icon text-center d-flex justify-content-center align-items-center"
             type="submit" @click="threeMenuOpen">
             <i class="fas fa-angle-down"></i>

            <ul class="logout-sub-menu sub-menu" id="logout-sub-menu" :class="{ submenuthreeopen: threeOpen}">
                <li>
                    <n-link to="/dashboard" class="d-flex align-items-center px-2 justify-content-start">

                        Others
                    </n-link>
                </li>
                <li>

                     <div class="d-flex px-2 align-items-center justify-content-start">
                    <button type="button" class="btn2">Technology</button>
                  </div>
                </li>
            </ul>
        </div>


    </div>

</template>

<script>
    export default {
        name: "profileComponent",
        data() {
            return {
                logoutMenuState: false,
                threeOpen: false,
            }
        },

        methods: {
            threeMenuOpen(){
                this.threeOpen = !this.threeOpen
            },

        },
    }
</script>

<style scoped>
.btn2 {
 background: #00B5D3;
border: none;
padding: 5px 20px 5px;
color: black;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #fff;
opacity: 0.5;
}

    .user-icon {
        width: 30px;
        height: 30px;
        background-color: #00B5D3;
        border: none;
        color: white;
        font-family: sans-serif;
        font-size: 18px;
        border-radius: 50%;
        display: inline-block;
    }

    .logout-sub-menu {
        position: absolute;
        top: 120px;
        z-index: 1000;
        box-shadow: 0 13px 42px 11px rgba(0, 0, 0, .05);
        background-color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
    }

    @media all and (max-width: 1024px) {
        .user-icon {
            height: 30px;
            width: 30px;
            font-size: 14px;
        }
    }

    .sub-menu {
        /*width: 270px;*/
        display: block;
        position: absolute;
        background-color: #fefefe;
        z-index: 250;
        opacity: 0;
        visibility: hidden;
        width: 390px;
        right: -20px;
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, .25), 0 30px 60px -30px rgba(0, 0, 0, .3), 0 -18px 60px -10px rgba(0, 0, 0, .025);
        transition: all 650ms ease;
    }

    .nav-list li:hover > .sub-menu, .nav-list li:active> .sub-menu, .nav-list li:focus> .sub-menu {
        top: 60px;
        opacity: 1;
        visibility: visible;
    }
    .submenuthreeopen{
        opacity: 1;
        visibility: visible;
        max-height: initial;
    }
    li a{
        color: #333!important;
        font-size: 14px;
        line-height: 32px;
    }
    li{
        padding: .5rem 0;
    }
    .logout-sub-menu{
       right: 0px;
    }

    @media screen and (min-width: 750px) {
      .logout-sub-menu{
       right: 90px;
    }
    }
</style>
