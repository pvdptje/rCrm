@if(Session::has('message'))

    <div class="row">
        <div class="col-12 mt-1">
            <div class="alert alert-success">
                {{ Session::get('message') }}
            </div>
        </div>
    </div>

@endif