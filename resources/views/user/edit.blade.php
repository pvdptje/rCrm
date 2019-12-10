@extends('layouts.admin')

@section('content')

    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            @if($editableUser = Request::route('user'))
                <span class="text-uppercase page-subtitle">{{ __('Edit details of') }} {{$editableUser->name}}</span>
            @else
                <span class="text-uppercase page-subtitle">{{ __('Edit your own details') }}</span>
            @endif
            <h3 class="page-title">{{ __('Edit details') }}</h3>
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
                    <h6 class="mb-0">{{ __('Edit details') }}</h6>
                </div>
                <div class="card-body">

                    @if($model = Request::route('user'))
                        {!! Form::model($model, ['route' => 'user.update']) !!}
                    @else
                        {!! Form::model(Auth::user(),['route' => 'user.update']) !!}
                    @endif


                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Full name') }}</label>

                        <div class="col-md-6">
                            {!! Form::text('name', null, ['class' => 'form-control']) !!}
                            @error('name')
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
                        <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                        <div class="col-md-6">
                            {!! Form::password('password', ['class' => 'form-control']) !!}
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                            @enderror
                            <small>{{ __('Leave empty if you do not wish to change this') }}</small>
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
