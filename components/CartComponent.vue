<template>
    <div>
        <div  class="nav-list mr-5" style="cursor: pointer; margin-top: 10px;"
        >

          <div class="notification">
            <i class="fas fa-bell fa-2x ml-lg-5"></i>
          <b-badge variant="danger" class="danger_">4</b-badge>
          </div>

            <div class="cart sub-menu">
                <div class="cart_box">
                    <ul class="cart_list">
                        <li>
                            <div class="d-flex ">
                                <div class="flex-grow-0 pt-3 pb-2">
                                   <span>Notifications</span>
                              </div>
                            </div>
                        </li>
                    </ul>
                    <div class="mt-4">

                        <div class="row">
                            <div class="cart_buttons_madesoft col-12">
                                 <h6 class="font-weight-bold">Notification 1</h6>
                                <p>"Lorem ipsum dolor sit amet, consectetur eli</p>
                            </div>
                            <div class="cart_buttons_madesoft col-12">
                                 <h6 class="font-weight-bold">Notification 1</h6>
                                <p>"Lorem ipsum dolor sit amet, consectetur eli</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartComponent",
        data() {
            return {
                showCart: false,
                cartOpen: false,
            }
        },

    }
    //TODO test mobile responsiveness of menu and dropdowns
    //TODO make fixed menu onscroll
</script>

<style scoped>
.danger_ {
  position: relative;
  bottom: 18px;
  left: -7px;
}
.notification {
  position: relative;
  left: 20px;
}
    .cart_buttons_madesoft {
        margin: 0;
        padding: 10px 0;
        text-align: start;
        position: relative;
        left: 30px;
    }

    .cart_buttons_madesoft p {
      font-size: 12px;
    }

    .cart_buttons_madesoft .view-cart_madesoft,
    .cart_buttons_madesoft .checkout_madesoft {
        background-color: #E57718;
        color: #fff;
        margin: 0 5px !important;
        padding: .375rem .75rem !important;
        float: none !important;
    }

    .cart_buttons_madesoft .view-cart_madesoft:hover,
    .cart_buttons_madesoft .checkout_madesoft:hover {
        background-color: #4fbfa3;
    }

    .cart_count {
        position: relative;
        top: -13px;
        right: 13px;
        font-size: 10px;
        background-color: #0e93d8;
        border-radius: 50%;
        height: 16px;
        min-width: 16px;
        line-height: 16px;
        padding: 0 5px;
        color: #fff;
        font-weight: normal;
    }

    .nav-fixed .cart_count {
        top: 8px;
    }

    .cart_box {
        background-color: white;
        width: 300px;
        border: none;
        border-radius: 3px;
        box-shadow: 0 13px 42px 11px rgba(0, 0, 0, .1);
        position: absolute;
        /*top: 65px;*/
        right: -55px;
        max-height: 80vh;
        overflow-y: scroll;
        overflow-x:hidden;
        z-index: 1000;
    }

    .cart_list li {
        border-bottom: 1px solid rgba(119, 119, 119, 0.05);
        /*padding: 4px 14px;*/
        width: 100%;
        line-height: 40px;
        font-weight: bold;
        list-style: none;
    }

    .cart_list li:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .cart_list img {
        background-color: #ffffff;
        margin-right: 10px;
        max-width: 60px;
        vertical-align: top;
    }

    .cart_list {
        font-size: 14px;
    }

    .cart_list a:hover {
        color: #ddd !important;
    }

    .cart_quantity {
        font-size: 12px;
        font-weight: lighter;
        color: #4FBFA3;
    }

    .cart_total {
        margin: 0;
        padding: 10px 20px;
        text-align: right;
        line-height: 1;
    }

    .cart_total strong {
        float: left;
    }

    .cart_buttons {
        margin: 0;
        padding: 10px 20px 20px;
        text-align: center;
    }

    .cart_buttons .view-cart,
    .cart_buttons .checkout {
        background-color: #4fbfa3;
        color: #fff !important;
        margin: 0 5px !important;
        padding: .375rem .75rem !important;
        float: none !important;
    }

    .cart_buttons .view-cart:hover,
    .cart_buttons .checkout:hover {
        background-color: #4fbfa3;
    }

    .trash {
        cursor: pointer;
    }

    .cartProdName {
        white-space: nowrap;
        max-width: 165px;
        overflow: hidden;
        font-size: 14px;
        line-height: 16px;
        text-overflow: ellipsis;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .sub-menu {
        /*width: 270px;*/
        display: block;

        border-top: 2px solid #4FBFA3;
        background-color: #fefefe;
        z-index: 250;
        opacity: 0;
        visibility: hidden;
        top: 160px;
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, .25), 0 30px 60px -30px rgba(0, 0, 0, .3), 0 -18px 60px -10px rgba(0, 0, 0, .025);
        transition: all 650ms ease;
    }

    @media screen and (min-width: 600px) {
        .sub-menu {
            position: absolute;
        }
    }
    @media screen and (max-width: 550px) {
        .sub-menu {
            position: relative;
            left: -60px;
        }
        .notification{
          margin-bottom: 7px;
          margin-top: 5px;
          margin-left: -10px;
        }
    }



    .nav-list:hover > .sub-menu {
        top: 80px;
        opacity: 1;
        visibility: visible;
    }
</style>
