<template>
    <Layout :title="__('Account')" v-bind:breadcrumbs="breadcrumbs">

      <div class="vx-row">

          <div class="vx-col w-full sm:w-3/4 mb-base">

              <vx-card title="Bedrijfsgegevens" :subtitle="__('Review them, or change if necessary.')">

                  <form @submit.prevent="saveCompanyDetails">
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Company name') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.company_name" :danger="$page.errors.company_name" :text-danger="$page.errors.company_name ? $page.errors.company_name[0] : ''" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Email name') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" type="email" v-model="companyForm.invoice_email" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Phone') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.phone" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Straat ') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.street" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('House number') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.house_number" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Postcode') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.postcode" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('City') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.city" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Province') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.province" />
                      </div>
                  </div>
                  <div class="vx-row mb-6">
                      <div class="vx-col sm:w-1/3 w-full">
                          <span>{{ __('Country') }}</span>
                      </div>
                      <div class="vx-col sm:w-2/3 w-full">
                          <vs-input class="w-full" v-model="companyForm.country" />
                      </div>
                  </div>
                  <div class="vx-row">
                      <div class="vx-col sm:w-2/3 w-full ml-auto">
                          <vs-button class="mr-3 mb-2">{{ __('Save') }}</vs-button>
                      </div>
                  </div>
                  </form>
              </vx-card>

          </div>
          <div class="vx-col w-full sm:w-1/4 mb-base">

              <vx-card :title="__('Logo')" :subtitle="__('Change your company logo here')">

                  <div v-if="this.$page.account.logo && !companyLogo.input" class="mb-6">
                      <img :src="this.$page.account.logo" class="max-w-full" />
                  </div>



                  <vs-input id="logoInput" type="file" @change="onLogoChange" style="display:none"></vs-input>

                  <vs-alert v-if="uploadError" ref="alert"  color="danger" class="mb-6" title="Fout!" active="true">
                      {{ __('Please, upload an image') }}
                  </vs-alert>

                  <vs-alert v-if="$page.errors.logo" ref="alert"  color="danger" class="mb-6" title="Fout!" active="true">
                      {{ $page.errors.logo[0]}}
                  </vs-alert>

                  <vs-button color="primary" v-if="!companyLogo.input" onclick="document.getElementById('logoInput').click()">Wijzigen</vs-button>
                  <div class="mt-6" v-if="companyLogo.input">
                      <vue-cropper
                              ref="cropper"
                              :aspect-ratio="16 / 9"
                              :src="companyLogo.input"
                              preview=".preview"
                      />

                      <div class="mt-1">
                          <vs-button
                                     size="small"
                                     class="inline-block"
                                     role="button"
                                     color="secondary"
                                     @click.prevent="zoom(0.2)"
                          >{{__('Zoom in')}}</vs-button>
                          <vs-button
                                     class="inline-block"
                                     role="button"
                                     color="secondary"
                                     size="small"
                                     @click.prevent="zoom(-0.2)"
                          >{{__('Zoom out')}}</vs-button>

                          <vs-button
                                  class="inline-block"
                                  role="button"
                                  color="primary"
                                  size="small"
                                  @click.prevent="storeCompanyLogo"
                          >{{ __('Save') }}</vs-button>
                      </div>


                      <p class="mt-1">
                          {{ __('Make sure that your logo fits the indicated ratio for the best result.') }}
                      </p>
                  </div>





              </vx-card>

          </div>
      </div>

    </Layout>

</template>
<script>
    import Layout from '@/layouts/Layout';
    import VxCard from "../../components/vx-card/VxCard";
    import VueCropper from 'vue-cropperjs';
    import Translations from '@/translations';
    import 'cropperjs/dist/cropper.css';

    export default {
        metaInfo: { title: 'Account' },
        mixins: [
          Translations
        ],
        props: {
           user: Object,
           account: Object
        },
        data(){
            return {
                breadcrumbs: [
                    {
                        link: '/account',
                        text: 'Account'
                    },
                ],
                companyForm: {
                    company_name: this.account.company_name,
                    invoice_email: this.account.invoice_email,
                    phone: this.account.phone,
                    street: this.account.street,
                    house_number: this.account.house_number,
                    city: this.account.city,
                    postcode: this.account.postcode,
                    province: this.account.province,
                    country: this.account.country
                },
                companyLogo: {
                    input: null
                },
                uploadError: false,
            }
        },
        methods: {
          saveCompanyDetails(){
              this.$vs.loading()
              this.$inertia.post('/account/update', this.companyForm).then(() => this.$vs.loading.close())
          },
          storeCompanyLogo(){
              this.$vs.loading()
              let vm = this;
              this.$inertia.post('/upload/account/logo', {
                    logo: this.$refs.cropper.getCroppedCanvas().toDataURL()
              }).then(function(){
                 vm.$vs.loading.close();
                 vm.companyLogo.input = null;
              });
          },
          zoom(percent) {
                this.$refs.cropper.relativeZoom(percent);
          },
          onLogoChange(e){
              let files = e.target.files || e.dataTransfer.files;
              if (!files.length)
                  return;

              const file = e.target.files[0];
              if (file.type.indexOf('image/') === -1) {
                  this.uploadError = 'Upload een afbeelding aub.';
                  return;
              }

              this.uploadError = false;

              this.createLogoImage(files[0]);
          },
          createLogoImage(file){
              let image = new Image();
              let reader = new FileReader();
              let vm = this;
              reader.onload = (e) => {
                  vm.companyLogo.input = e.target.result;
              };
              reader.readAsDataURL(file);
          }
        },
        components: {
            VxCard,
            Layout,
            VueCropper
        }
    }
</script>