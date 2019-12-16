<template>
    <Layout title="Instellingen" v-bind:breadcrumbs="breadcrumbs">

        <vs-tabs position="left">

            <vs-tab :label="__('Calendar')" position="left">
                    <vx-card :title="__('Calendar settings')" :subtitle="__('Connect your account with Google Calendar')">
                        <div v-if="!isConnectedToGoogle">
                            <p class="mb-6">
                                {{ __('Connect with your Google account to automatically place appointments made here into your calendar.')}}
                            </p>
                            <vs-button href="/oauth/redirect?followUpUrl=/settings" color="primary">{{__('Connect now')}}</vs-button>
                        </div>
                        <div v-if="isConnectedToGoogle && !calendarId">
                            <p class="mb-6 font-bold">
                                {{__('Your Google account is successfully connected.') }}
                            </p>
                            <p class="mb-6">
                                {{__(' However, we don\'t know which calendar to work with. Please select one of your calendars.')}}
                                <br /> {{__('You can only select calendars for which you have write and read access.')}}
                            </p>
                            <vs-select
                                    class="w-full mb-6"
                                    :label="__('Choose a calendar')"
                                    v-model="calendar.id"
                            >
                                <vs-select-item :key="key" :value="key" :text="value" v-for="value,key in calendarList" />
                            </vs-select>

                            <vs-button @click="saveCalendar" color="primary">{{ __('Save calendar') }}</vs-button>
                        </div>
                        <div v-if="isConnectedToGoogle && calendarId">
                            <p class="mb-6 font-bold">{{ __('Your Google Calendar is successfully connected.') }}</p>
                            <p class="mb-6">
                                {{ __('Active calendar')}}: <span class="font-bold"> {{ calendarId }} </span>
                            </p>
                            <p class="mb-6">
                                 {{ __('If you wish to change or disconnect the calendar')}} <a class="cursor-pointer" @click="disconnectCalendar">{{ __('Click here') }}</a>
                            </p>
                        </div>
                    </vx-card>
            </vs-tab>
            <vs-tab :label="__('Invoicing settings')" position="left">
                <vx-card :title="__('Change your invoicing settings')">


                    <div class="vx-row">
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="First Name" v-model="input25" />
                        </div>
                        <div class="vx-col sm:w-1/2 w-full mb-2">
                            <vs-input class="w-full" label-placeholder="Last Name" v-model="input26" />
                        </div>
                    </div>


                </vx-card>
            </vs-tab>
        </vs-tabs>




    </Layout>
</template>
<script>

    import Layout from '@/layouts/Layout';
    import Translations from '@/translations';
    import VxCard from "../../components/vx-card/VxCard";

    export default {
        mixins: [
            Translations
        ],
        components: {
            VxCard,
            Layout,
        },
        props: {
            'isConnectedToGoogle': Boolean,
            'calendarId': String,
            'calendarList': Array,
        },
        data(){
            return {
                breadcrumbs: [
                    {
                        link: '/settings',
                        text: 'Instellingen'
                    },
                ],
                calendar: {
                    id: this.calendarId
                },
            }
        },
        methods: {
          saveCalendar(){
              this.$vs.loading();
              let vm = this;
              this.$inertia.post('/user/saveSetting', {
                    key: 'google_calendar_id',
                    value: this.calendar.id
              }).then(function(){
                 vm.$vs.loading.close();
              });
          },
          disconnectCalendar()
          {
              this.$vs.loading();
              let vm = this;
              this.$inertia.post('/user/saveSetting', {
                  key: 'google_calendar_id',
                  value: ''
              }).then(function(){
                  vm.$vs.loading.close();
              });
          }
        },
        created(){
            console.log(this.calendarId);
        }
    }
</script>
