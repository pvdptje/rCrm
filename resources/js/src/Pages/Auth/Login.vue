<template>
    <FullPage v-bind:breadcrumbs="breadcrumbs" title="Inloggen">
        <div id="page-login" class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
            <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
                <vx-card>
                    <form @submit.prevent="submit">
                        <div class="vx-row no-gutter justify-center items-center">
                            <div class="vx-col hidden lg:block lg:w-1/2"><img src="https://placebeard.it/400x230" alt="login" class="mx-auto"></div>
                            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                                <div class="px-8 pt-8 login-tabs-container">
                                    <div class="vx-card__title mb-4">
                                        <h4 class="mb-4">Login</h4>
                                        <p>Welkom terug, log in op uw account.</p>
                                    </div>
                                    <div>
                                        <vx-input-group>
                                            <vs-input icon="email" icon-after label="E-mailadres" class="w-full" type="email" autofocus v-model="form.email" />
                                            <span class="text-danger text-sm" v-if="$page.errors.email">{{ $page.errors.email[0] }}</span>

                                            <vs-input icon="lock" icon-after label="Wachtwoord" class="w-full" type="password" v-model="form.password" />
                                            <span class="text-danger text-sm" v-if="$page.errors.password">{{ $page.errors.password[0] }}</span>
                                        </vx-input-group>
                                        <div class="flex flex-wrap justify-between my-5">
                                            <vs-checkbox class="inline-flex" v-model="form.remember">Mij onthouden</vs-checkbox>
                                        </div>
                                        <div class="flex flex-wrap justify-between mb-3">
                                            <vs-button color="primary">Log in</vs-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </vx-card>
            </div>
        </div>
    </FullPage>
</template>
<script>
    import FullPage from '@/layouts/FullPage';
    import VxCard from "../../components/vx-card/VxCard";
    import VxInputGroup from "../../components/vx-input-group/VxInputGroup";

    //@todo Use translations mixin.

    export default {
        metaInfo: { title: 'Login' },
        components: {
            VxInputGroup,
            VxCard,
            FullPage
        },
        props: {
            errors: Object,
        },
        data() {
            return {
                breadcrumbs: [
                    {
                        link: '/login',
                        text: 'Login'
                    },
                ],
                sending: false,
                form: {
                    email: null,
                    password: null,
                    remember: null,
                },
            }
        },
        mounted: function () {


        },
        methods: {
            submit() {
                this.$vs.loading()
                this.sending = true
                this.$inertia.post('/login', {
                    email: this.form.email,
                    password: this.form.password,
                    remember: this.form.remember,
                }).then(() => this.$vs.loading.close())
            },
        },
    }
</script>