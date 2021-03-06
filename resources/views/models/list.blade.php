@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-6 text-left pull-left">
                    <h2>Your Models</h2>
                </div>
                <div class="col-md-6 text-right pull-right">
                    <a href="{{ route('models.create') }}" class="btn btn-primary">Create Model</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    @if(count(auth()->user()->models()) === 0)
                        <center>
                            <h4>You haven't created any HelloAI Models! You can create one <a href="{{ route('models.create') }}">here</a>.</h4>
                        </center>
                    @else
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Identifier</th>
                                    <th>Status</th>
                                    <th>Accuracy</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach(auth()->user()->models() as $model)
                                    <tr>
                                        <td>{{ $model->name }}</td>
                                        <td>{{ $model->type }}</td>
                                        <td>
                                            <code>{{ $model->identifier }}</code>
                                        </td>
                                        <td>{{ $model->getTextStatus() }}</td>
                                        <td>{{ $model->getAccuracy() }}</td>
                                        <td>
                                            <a href="{{ route('models.view', ['identifier' => $model->identifier]) }}">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

@if(isset($_GET['popup']))
    <div class="modal" id="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Model Created!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{{ $_GET['popup'] }}</p>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#modal').modal();

            var uri = window.location.toString();
            if (uri.indexOf("?") > 0) {
                var clean_uri = uri.substring(0, uri.indexOf("?"));
                window.history.replaceState({}, document.title, clean_uri);
            }
        });
    </script>
@endif
@endsection
