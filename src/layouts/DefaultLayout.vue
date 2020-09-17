<template>
    <div>
        <div class="header">
            <div class="header-container container">
                <div class="header-container__logo">
                    <a href="#">
                        <img src="../assets/logo.svg" alt="">
                    </a>
                </div>
                <div class="header-container__burger">
                    <div class="burger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout'
    }
</script>

<style lang="scss">
    @import "src/styles/color";
    .header {
        &-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            &__logo {
                a {
                    img {
                        max-width: 200px;
                    }
                }
            }
            &__burger {
                .burger-btn {
                    width: 52px;
                    height: 36px;
                    position: relative;
                    cursor: pointer;
                    span {
                        position: absolute;
                        &:nth-child(1) {
                            top: 0;
                            width: 100%;
                            height: 4px;
                            background: $green;
                        }
                        &:nth-child(2) {
                            top: calc(50% - 2px);
                            width: 100%;
                            height: 4px;
                            background: $green;
                        }
                        &:nth-child(3) {
                            bottom: 0;
                            width: 100%;
                            height: 4px;
                            background: $green;
                        }
                    }
                }
            }
        }
    }
</style>