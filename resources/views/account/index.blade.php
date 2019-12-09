@extends('layouts.admin')

@section('content')

    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">{{ __('Settings and user management') }}</span>
            <h3 class="page-title">{{ __('Account') }}</h3>
        </div>
    </div>

    @if(!$errors->isEmpty())

        <div class="row">
            <div class="col-12">
                <div class="alert alert-danger">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </div>
            </div>
        </div>

    @endif
    <!-- End Page Header -->
    <!-- Small Stats Blocks -->
    <div class="row">
        <div class="col-sm-8">

            <div class="card">
                <div class="card-header border-bottom">
                    <h6 class="m-0">{{ __('Company details') }}</h6>
                </div>
                <div class="card-body">


                    <div id="change-logo" class="row">
                        <div class="col-md-6 text-md-right">
                            @if($logo)
                                <img src="{{ asset($logo->path) }}" id="company-logo" class="d-inline-block align-top mr-1" alt="rCrm" />
                            @else
                                <img src="/images/logos/logo_transparent_small.png" id="company-logo" class="d-inline-block align-top mr-1" alt="rCrm" />
                            @endif

                        </div>
                        <div class="col-md-6">
                            <p>
                                <input class="d-none" type="file" name="logo" data-token="<?php echo csrf_token()?>" data-img="#company-logo" data-overwrite="1" />

                                <a class="change-logo pointer" onclick="$('input[name=logo]').trigger('click')"><i class="far fa-edit"></i> {{ __('Change company logo') }}</a>
                                <br/> <small>{{ __('The company logo will be visible above e-mails you will send.') }}</small>
                            </p>
                        </div>
                        <div class="col-12">
                            <div class="alert alert-danger d-none" id="logo-error"></div>
                        </div>
                   </div>



                    {!! Form::model($account, ['route' => 'account.update']) !!}


                        <div class="form-group row">
                            <label for="company_name" class="col-md-4 col-form-label text-md-right">{{ __('Company name') }}</label>

                            <div class="col-md-6">
                                {!! Form::text('company_name', null, ['class' => 'form-control']) !!}
                                @error('company_name')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Invoice email') }}</label>

                            <div class="col-md-6">
                                {!! Form::email('invoice_email', null, ['class' => 'form-control']) !!}
                                @error('email')
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
                    </form>
                </div>
            </div>

        </div>
        <div class="col-sm-4">
            <div class="card account-card">
                <div class="card-header border-bottom">
                    <h6 class="mb-0">{{ __('Your details') }}</h6>
                </div>
                <div class="card-body text-center">

                    <ul class="list-unstyled">

                        <li>
                            @if($avatar)
                                <img class="avatar-img" src="{{asset($avatar->path)}}" title="{{$user->name}}" />
                            @else
                                <img class="avatar-img" src="/images/avatars/0.jpg" />
                            @endif

                            <div class="alert alert-danger d-none" id="avatar-error">

                            </div>
                            <input class="d-none" type="file" name="avatar" data-token="<?php echo csrf_token()?>" data-img=".avatar-img" data-overwrite="1" />
                        </li>
                        <li>
                            <a class="change-photo" onclick="$('input[name=avatar]').trigger('click')">{{ _('Change photo') }}</a>
                        </li>



                        <li class="font-weight-bold">
                            {{ $user->name }}
                        </li>
                        <li>
                            {{ $user->email }}
                        </li>
                        <li class="mt-4">
                            <a href="#">{{ __('Edit details') }}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">{{ __('Users belonging to this account') }}</span>
            <h3 class="page-title">{{ __('Users') }}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h6 class="float-left">{{ _('Users') }}</h6>

                    <a href="{{ route('account.addUser') }}" class="float-right btn btn-primary">
                        <i class="fa fa-plus"></i>
                        {{ __('Add a new user') }}</a>

                </div>
                <div class="card-body">
                    <table class="table mb-0">
                        <thead class="bg-light">
                        <tr>
                            <th scope="col" class="border-0">#</th>
                            <th scope="col" class="border-0">{{ _('Name') }}</th>
                            <th scope="col" class="border-0">{{ _('Email') }}</th>
                            <th scope="col" class="border-0"></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($users as $user)
                            <tr>
                                <td>
                                    {{ $user->id }}
                                </td>
                                <td>
                                    {{ $user->name }}
                                </td>
                                <td>
                                    {{$user->email}}
                                </td>
                                <td>
                                    @if($user->id == Auth::user()->id)
                                        <a href="{{ route('user.edit') }}">{{ __('Edit details') }}</a>
                                    @else
                                        <a href="{{ route('user.destroy', $user->id) }}" class="confirm" data-msg="{{ __('Are you absolutely sure?') }}">{{ __('Delete user') }}</a>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection
