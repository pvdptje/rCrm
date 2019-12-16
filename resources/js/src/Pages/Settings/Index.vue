<template>
    <Layout title="Instellingen" v-bind:breadcrumbs="breadcrumbs">

        <vs-tabs position="left">

            <vs-tab label="Calendar" position="left">
                    <vx-card title="Calendar settings" subtitle="Connect your Google Calendar">


                        <div v-if="!isConnectedToGoogle">
                            <p class="mb-6">
                                {{ __('Connect with your Google account to automatically place appointments made here into your calendar.')}}
                            </p>
                            <vs-button href="/oauth/redirect" color="primary">{{_('Connect now')}}</vs-button>
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
        </vs-tabs>



    </Layout>
</template>
<script>

    import Layout from '@/layouts/Layout';
    import Translations from '@/translations';

    export default {
        mixins: [
            Translations
        ],
        components: {
            Layout,
        },
        props: {
            'isConnectedToGoogle': Boolean,
            'calendarId': String,
            'calendarList': Object,
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
