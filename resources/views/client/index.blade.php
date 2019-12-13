@extends('layouts.admin')

@section('content')

    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">{{ _('Overview') }}</span>
            <h3 class="page-title">{{ __('Your clients') }}</h3>
        </div>
    </div>

    @include('partials.errors')
    @include('partials.message')
    <!-- End Page Header -->
    <!-- Small Stats Blocks -->
    <div class="row">
        <div class="col-12">
            <div class="card card-small mb-4">
                <div class="card-header border-bottom">
                    <div class="row">
                        <div class="col-4"><h6 class="m-0">{{ __('Active clients') }}</h6></div>
                        <div class="col-8 text-right">
                            <form method="post" action="" id="actionForm">
                            {!! csrf_field() !!}
                            <input type="hidden" name="actionNamespace" value="client" />
                            <input type="hidden" name="actionModel" value="" />
                            <input type="hidden" name="actionIds" value="" />
                            <select class="form-control" id="actionName">
                                <option value="">Kies actie</option>
                                <option value="setInactive">{{ __('Mark client as `inactive`') }}</option>
                            </select>

                            <button id="doAction">{{_('Do action')}}</button>
                            </form>
                        </div>
                    </div>


                </div>
                <div class="card-body p-0 pb-3 text-center">
                    <table class="table mb-0">
                        <thead class="bg-light">
                        <tr>
                            <th scope="col" class="border-0"></th>
                            <th scope="col" class="border-0">{{ __('Name') }}</th>
                            <th scope="col" class="border-0">{{ __('Email') }}</th>
                            <th scope="col" class="border-0">{{ __('Created at') }}</th>
                            <th scope="col" class="border-0">{{ __('Updated at') }}</th>
                            <th scope="col" class="border-0"></th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($clients as $client)
                            <tr>
                                <td><input type="checkbox" name="id" data-model="{{get_class($client)}}" value="{{$client->id}}" /></td>
                                <td>{{$client->name}}</td>
                                <td>{{$client->email}}</td>
                                <td>{{$client->created_at}}</td>
                                <td>{{$client->updated_at}}</td>
                                <td>
                                    <a class="btn btn-secondary text-white"><i class="fa fa-edit"></i> {{__('edit')}}</a>
                                    <a class="btn btn-danger  text-white"><i class="fas fa-trash"></i> {{__('delete')}}</a>
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


@section('javascript')

    <script>
        $(function(){
            $("#doAction").click(function(e){
               e.preventDefault();
               var form = $("#actionForm");
               var actionName = $("#actionName").val();
               var actionNamespace = $("input[name=actionNamespace]").val();

               if(actionName.length && actionNamespace.length){
                   var ids = [];
                   var model = '';
                   var actionUrl = '/action/'+actionNamespace+'/'+actionName;

                   $.each($("input[name=id]:checked"), function(){
                       ids.push( $(this).val() );
                       if(model === ''){
                           model = $(this).data('model');
                       }
                   });

                   // Set the action form values and submit.

                   $("input[name=actionModel]").val(model);
                   $("input[name=actionIds]").val(ids);
                   form.attr('action', actionUrl);
                   form.submit();
               }
            });
        });
    </script>

@append