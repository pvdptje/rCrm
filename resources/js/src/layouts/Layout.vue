<!-- =========================================================================================
    File Name: Layout.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
        <!--<vx-sidebar :sidebarItems="sidebarItems" :logo="require('@assets/images/logo/logo_xs_png.png')" title="rCrm" parent=".layout&#45;&#45;main" />-->
        <vx-sidebar :sidebarItems="sidebarItems" title="rCrm" parent=".layout--main" />

        <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">

            <div id="content-overlay"></div>

            <div class="content-wrapper">


                <the-navbar :navbarColor="navbarColor" :class="[{'text-white': isNavbarDark && !isThemeDark}, {'text-base': !isNavbarDark && isThemeDark}]" />

                <div class="router-view">
                    <div class="router-content" :class="{'mt-0': navbarType == 'hidden'}">

                            <div class="router-header flex flex-wrap items-center mb-6">
                                <div class="content-area__heading" :class="{'pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light' : 'breadcrumb'}">
                                    <h2 class="mb-1">{{ title }}</h2>
                                </div>

                                <!-- BREADCRUMB -->
                                <vx-breadcrumb class="ml-4 md:block hidden" v-bind:breadcrumbs="breadcrumbs" />


                                <vs-button v-if="isThemeDark" @click="setTheme('light')" radius icon="icon-sun" class="ml-auto md:block cursor-pointer" icon-pack="feather"></vs-button>
                                <vs-button v-if="!isThemeDark" @click="setTheme('dark')" radius icon="icon-moon" class="ml-auto md:block cursor-pointer" icon-pack="feather"></vs-button>
                                <!-- DROPDOWN -->
                                <!--<vs-dropdown class="ml-auto md:block hidden cursor-pointer" vs-trigger-click>


                                    <vs-dropdown-menu class="w-32">
                                        <vs-dropdown-item>
                                            <div @click="$router.push('/pages/profile')" class="flex items-center">
                                                <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Profile</span>
                                            </div>
                                        </vs-dropdown-item>

                                        <vs-dropdown-item>
                                            <div @click="$router.push('/apps/todo')" class="flex items-center">
                                                <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Tasks</span>
                                            </div>
                                        </vs-dropdown-item>

                                        <vs-dropdown-item>
                                            <div @click="$router.push('/apps/email')" class="flex items-center">
                                                <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Inbox</span>
                                            </div>
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>
                                </vs-dropdown>-->
                            </div>
                    </div>

                <div class="content-area__content">
                    <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                        <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg" />
                    </back-to-top>

                    <vs-alert color="success" class="mb-6" title="Gelukt!" v-if="this.$page.flash.success">
                        {{this.$page.flash.success}}
                    </vs-alert>
                    <vs-alert color="danger" class="mb-6" title="Oeps!" v-if="this.$page.flash.error">
                        {{this.$page.flash.error}}
                    </vs-alert>
                                  <slot/>

                    </div>
                </div>
            </div>
            </div>

            <the-footer></the-footer>
        </div>

</template>

<script>
    import VxSidebar from '@/layouts/components/vx-sidebar/VxSidebar.vue';
    import TheNavbar from '@/layouts/components/TheNavbar.vue';
    import TheFooter from '@/layouts/components/TheFooter.vue';
    import themeConfig from '@/../themeConfig.js';
    import sidebarItems from "@/layouts/components/vx-sidebar/sidebarItems.js";
    import BackToTop from 'vue-backtotop'

    export default {
        props: ['breadcrumbs', 'title'],
        data() {
            return {
                navbarType: themeConfig.navbarType || 'floating',
                navbarColor: themeConfig.navbarColor || '#fff',
                footerType: themeConfig.footerType || 'static',
                routerTransition: themeConfig.routerTransition || 'none',
                isNavbarDark: false,
                routeTitle: 'Test',
                sidebarItems: sidebarItems,
                disableCustomizer: themeConfig.disableCustomizer,
                windowWidth: window.innerWidth, //width of windows
                hideScrollToTop: themeConfig.hideScrollToTop,
                disableThemeTour: themeConfig.disableThemeTour
            }
        },
        watch: {
            isThemeDark(val) {
                if(this.navbarColor == "#fff" && val) {
                    this.updateNavbarColor("#10163a")
                }else {
                    this.updateNavbarColor("#fff")
                }
            },
            '$store.state.theme'(val) {
                this.toggleClassInBody(val);
            }
        },
        computed: {
            isAppPage() {
                return false;
            },
            isThemeDark() { return this.$store.state.theme == 'dark' },
            sidebarWidth() {
                return this.$store.state.sidebarWidth;
            },
            bodyOverlay() {
                return this.$store.state.bodyOverlay;
            },
            contentAreaClass() {
                if(this.sidebarWidth == "default") return "content-area-default"
                else if(this.sidebarWidth == "reduced") return "content-area-reduced"
                else if(this.sidebarWidth) return "content-area-full"
            },
            navbarClasses() {
                return {
                    'navbar-hidden': this.navbarType == 'hidden',
                    'navbar-sticky': this.navbarType == 'sticky',
                    'navbar-static': this.navbarType == 'static',
                    'navbar-floating': this.navbarType == 'floating',
                }
            },
            footerClasses() {
                return {
                    'footer-hidden': this.footerType == 'hidden',
                    'footer-sticky': this.footerType == 'sticky',
                    'footer-static': this.footerType == 'static',
                }
            },
        },
        methods: {
            changeRouteTitle(title) {
                this.routeTitle = title;
            },
            updateNavbarColor(val) {
                this.navbarColor = val;
                if(val == "#fff") this.isNavbarDark = false
                else this.isNavbarDark = true
            },
            handleWindowResize(event) {
                this.windowWidth = event.currentTarget.innerWidth;
                this.setSidebarWidth();
            },
            setSidebarWidth() {
                if (this.windowWidth < 1200) {
                    this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false)
                    this.$store.dispatch('updateSidebarWidth', 'no-sidebar')
                    this.disableThemeTour = true;
                }
                else if(this.windowWidth < 1200) {
                    this.$store.dispatch('updateSidebarWidth', 'reduced')
                }
                else {
                    this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true)
                }
            },
            toggleHideScrollToTop(val) {
                this.hideScrollToTop = val;
            },
            toggleClassInBody(className) {
                if (className == 'dark') {
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                    document.body.classList.add('theme-dark');
                } else if (className == 'semi-dark') {
                    if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                    document.body.classList.add('theme-semi-dark');
                } else {
                    if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                    if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                }
            },
            setTheme(theme){
                this.$store.state.theme = theme;
                this.toggleClassInBody(this.$store.state.theme);
                if(this.navbarColor == "#fff" && this.isThemeDark) {
                    this.updateNavbarColor("#10163a")
                }else {
                    this.updateNavbarColor(this.navbarColor)
                }
            }
        },
        components: {
            VxSidebar,
            TheNavbar,
            TheFooter,
            BackToTop
        },
        created() {
            this.setSidebarWidth();
            this.toggleClassInBody(this.$store.state.theme);
            if(this.navbarColor == "#fff" && this.isThemeDark) {
                this.updateNavbarColor("#10163a")
            }else {
                this.updateNavbarColor(this.navbarColor)
            }
        }
    }
</script>
