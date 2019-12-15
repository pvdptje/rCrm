<template>
    <layout v-bind:breadcrumbs="breadcrumbs()" v-bind:title="title">

        <section id="basic-horizontal-layouts">
            <div class="row match-height">
                <div class="col-md-6 col-12">
                    <div class="card" style="height: 419.75px;">
                        <div class="card-header">
                            <h4 class="card-title">Horizontal Form</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form class="form form-horizontal">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>First Name</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="text" id="first-name" class="form-control" name="fname" placeholder="First Name">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Email</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="email" id="email-id" class="form-control" name="email-id" placeholder="Email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Mobile</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="number" id="contact-info" class="form-control" name="contact" placeholder="Mobile">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Password</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <input type="password" id="password" class="form-control" name="password" placeholder="Password">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-8 offset-md-4">
                                                <fieldset class="checkbox">
                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                        <input type="checkbox">
                                                        <span class="vs-checkbox">
                                                                    <span class="vs-checkbox--check">
                                                                        <i class="vs-icon feather icon-check"></i>
                                                                    </span>
                                                                </span>
                                                        <span class="">Remember me</span>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-8 offset-md-4">
                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Submit</button>
                                                <button type="reset" class="btn btn-outline-warning mr-1 mb-1 waves-effect waves-light">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card" style="height: 419.75px;">
                        <div class="card-header">
                            <h4 class="card-title">Horizontal Form with Icons</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form class="form form-horizontal">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>First Name</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="position-relative has-icon-left">
                                                            <input type="text" id="fname-icon" class="form-control" name="fname-icon" placeholder="First Name">
                                                            <div class="form-control-position">
                                                                <i class="feather icon-user"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Email</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="position-relative has-icon-left">
                                                            <input type="email" id="email-icon" class="form-control" name="email-id-icon" placeholder="Email">
                                                            <div class="form-control-position">
                                                                <i class="feather icon-mail"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Mobile</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="position-relative has-icon-left">
                                                            <input type="number" id="contact-icon" class="form-control" name="contact-icon" placeholder="Mobile">
                                                            <div class="form-control-position">
                                                                <i class="feather icon-smartphone"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group row">
                                                    <div class="col-md-4">
                                                        <span>Password</span>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="position-relative has-icon-left">
                                                            <input type="password" id="pass-icon" class="form-control" name="contact-icon" placeholder="Password">
                                                            <div class="form-control-position">
                                                                <i class="feather icon-lock"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-8 offset-md-4">
                                                <fieldset class="checkbox">
                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                        <input type="checkbox">
                                                        <span class="vs-checkbox">
                                                                    <span class="vs-checkbox--check">
                                                                        <i class="vs-icon feather icon-check"></i>
                                                                    </span>
                                                                </span>
                                                        <span class="">Remember me</span>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-8 offset-md-4">
                                                <button type="submit" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Submit</button>
                                                <button type="reset" class="btn btn-outline-warning mr-1 mb-1 waves-effect waves-light">Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </layout>
</template>

<script>
    import Layout from '@/layouts/Layout';
    export default {
        components: {
            Layout,
        },
        props: {
            title: String,
            breadcrumbs: Array,
        },
        methods: {
            breadcrumbs(){
                return [
                    {
                        'link': '/clients',
                        'text': 'Clienten'
                    },
                    {
                        'link': '',
                        'text': 'Nieuwe client toevoegen'
                    },
                ]
            }
        }
    }
</script>