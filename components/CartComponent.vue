<template>
    <div>
        <div  @click="cartMenuOpen" @mouseover="cartMenuOpen" @mouseleave="cartMenuOpen" class="nav-list mr-5" style="cursor: pointer; margin-top: 10px;"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                <path
                        d="M0 0h24v24H0V0z" fill="none"/>
                <path
                        d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>

            <div class="cart sub-menu">
                <div class="cart_box">
                    <ul class="cart_list">
                        <li>
                            <div class="d-flex pl-3 justify-content-between">
                                <div class="flex-grow-0 mr-3 p-0">

                                </div>
                                <div class="flex-grow-1 mt-3">
                                    <!-- <p class="cartProdName mb-1">cart</p>
                                    <p class="cart_quantity mb-1">hello</p> -->
                                </div>
                                <div class="flex-grow-0 mt-3"><i class="trash">
                                    <img alt=""
                                         src="~/assets/img/delete-black-18dp.svg"
                                    >
                                </i></div>
                            </div>
                        </li>
                    </ul>
                    <div class="">
                        <div class="d-flex justify-content-end ">
                            <div class="cart_total">Total
                            </div>
                        </div>

                        <div class="row">
                            <div class="cart_buttons_madesoft col-6">
                            </div>
                            <div class="cart_buttons_madesoft col-6">
                                <n-link to="/payments">
                                    <button
                                            class="btn view-cart_madesoft">Checkout
                                    </button>
                                </n-link>
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
    .cart_buttons_madesoft {
        margin: 0;
        padding: 10px 0;
        text-align: center;
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
        overflow-x: hidden;
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
        position: absolute;
        border-top: 2px solid #4FBFA3;
        background-color: #fefefe;
        z-index: 250;
        opacity: 0;
        visibility: hidden;
        top: 160px;
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, .25), 0 30px 60px -30px rgba(0, 0, 0, .3), 0 -18px 60px -10px rgba(0, 0, 0, .025);
        transition: all 650ms ease;
    }

    .nav-list:hover > .sub-menu {
        top: 80px;
        opacity: 1;
        visibility: visible;
    }
</style>
