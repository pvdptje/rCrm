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