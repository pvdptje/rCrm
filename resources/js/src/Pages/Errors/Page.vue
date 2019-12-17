<template>
    <FullPage :title="statusCode + ' ' + __('Something went wrong...')">
        <div>
            <div class="h-screen flex w-full bg-img">
                <div class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"><img src="/demo/vuexy-vuejs-laravel-admin-template/demo-2/images/404.png?0a38972b4083f43522258cbe550a3cb7" alt="graphic-404" class="mx-auto mb-4 max-w-full">

                    <h1 v-if="statusCode === '404'" class="sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color">{{ __('404 - Page Not Found!')}}</h1>
                    <h1 v-if="statusCode === '500'" class="sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color">{{ __('500 - Server error') }}</h1>
                    <h1 v-if="statusCode === '503'" class="sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color">{{ __('503 - Server error') }}</h1>
                    <h1 v-if="statusCode === '401'" class="sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color">{{ __('401 - Unauthorized request') }}</h1>
                    <h1 v-if="statusCode === '403'" class="sm:mx-0 mx-4 mb-12 text-5xl d-theme-heading-color">{{ __('403 - Forbidden') }}</h1>

                    <p class="sm:mx-0 mx-4 mb-4 sm:mb-16 d-theme-text-inverse">
                        paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.
                    </p>

                    <input type="hidden" id="statusCodeInput" :value="statusCode"/>

                    <vs-button href="/">{{__('Back to Home')}}</vs-button>
            </div>
            </div>
        </div>
      </FullPage>
</template>

<script>
    import FullPage from '@/layouts/FullPage'
    import Translations from '@/translations'

    export default {
        metaInfo: {
          title: 'Something went wrong..'
        },
        mixins : [
          Translations
        ],
        components: {
            FullPage
        },
        created(){
            const title = document.querySelector('head title');
            // Update the meta info the with translation
            this.$nextTick( () => {
                title.textContent = this.statusCode + ' - ' + __('Something went wrong')
            })
        },
        props: ['statusCode'],
    }
</script>