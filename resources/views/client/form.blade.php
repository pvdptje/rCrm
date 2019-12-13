@extends('layouts.admin')

@section('content')

    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">{{ _('Add a new client') }}</span>
            <h3 class="page-title">{{ __('Add client') }}</h3>
        </div>
    </div>

    @include('partials.errors')
    @include('partials.message')
    <!-- End Page Header -->
    <!-- Small Stats Blocks -->
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h6 class="mb-0">{{ __('New client') }}</h6>
                </div>
                <div class="card-body">

                    {!! Form::open(['route' => 'client.store']) !!}

                    <div class="form-group row">
                        <label for="first_name" class="col-md-4 col-form-label text-md-right">{{ __('First name') }}</label>
                        <div class="col-md-6">
                            {!! Form::text('first_name', null, ['class' => 'form-control']) !!}
                            @error('first_name')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="last_name" class="col-md-4 col-form-label text-md-right">{{ __('Last name') }}</label>
                        <div class="col-md-6">
                            {!! Form::text('last_name', null, ['class' => 'form-control']) !!}
                            @error('last_name')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Email') }}</label>
                        <div class="col-md-6">
                            {!! Form::email('email', null, ['class' => 'form-control']) !!}
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="country" class="col-md-4 col-form-label text-md-right">{{ __('Date of birth') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('date_of_birth', null, ['class' => 'form-control datepicker']) !!}
                            @error('country')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="street" class="col-md-4 col-form-label text-md-right">{{ __('Street') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('street', null, ['class' => 'form-control']) !!}
                            @error('street')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="house_number" class="col-md-4 col-form-label text-md-right">{{ __('Number') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('house_number', null, ['class' => 'form-control']) !!}
                            @error('house_number')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="postcode" class="col-md-4 col-form-label text-md-right">{{ __('Postcode') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('postcode', null, ['class' => 'form-control']) !!}   @error('house_number')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="province" class="col-md-4 col-form-label text-md-right">{{ __('Province') }}</label>

                        <div class="col-md-6">
                            {!! Form::select('province',get_provinces(), null, ['class' => 'form-control']) !!}

                            @error('province')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="city" class="col-md-4 col-form-label text-md-right">{{ __('City') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('city', null, ['class' => 'form-control']) !!}

                            @error('city')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="country" class="col-md-4 col-form-label text-md-right">{{ __('Country') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('country', null, ['class' => 'form-control']) !!}
                            @error('country')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-save"></i> {{ __('Save') }}
                            </button>
                        </div>
                    </div>

                    {!! Form::close() !!}
                </div>

            </div>
        </div>
    </div>

@endsection

@include('partials.datepicker')