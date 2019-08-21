function ActionsController() {
    this.URL_API = "http://dionisio-env.yenwtnrkxn.us-east-1.elasticbeanstalk.com/";

    this.GetUrlApiService = function (service) {
		return this.URL_API + service;
    }

    this.ShowMessage = function (type,message) {
		if (type == 'E') {
			$("#alert_container").removeClass("alert alert-success alert-dismissable")
			$("#alert_container").addClass("alert alert-danger alert-dismissable");
			$("#alert_message").text(message);
		} else if (type == 'I') {
			$("#alert_container").removeClass("alert alert-danger alert-dismissable")
			$("#alert_container").addClass("alert alert-success alert-dismissable");
			$("#alert_message").text(message);
		}
		$('.alert').show();
	};
    
    this.PostToAPI = function (service, data) {
		var jqxhr = $.post(this.GetUrlApiService(service), data, function (response) {
            console.log(response.Message);
            sessionStorage.setItem("POST_RESPONSE", response.Message);
            return response.Message;
		})
			.fail(function (response) {
				var data = response.responseJSON;
                console.log(data);
                sessionStorage.setItem("POST_RESPONSE", data.ExceptionMessage);
                return data.ExceptionMessage;
			})
    };

    this.GetToAPI = function (url) {
        var response = {};
        try {
            $.ajax({
                type: "GET",
                url: url,
                cache: false,
                async: false,
                success: function (data) {
                    response = data['Data'];
                }
            });
        } catch (err) {
            console.log(err);
        }
        return response;
    }

    this.PutToAPI = function (service, data) {
		var jqxhr = $.put(this.GetUrlApiService(service), data, function (response) {
			var actionsCtrl = new ActionsController();
			actionsCtrl.ShowMessage('I', response.Message);
		})
			.fail(function (response) {
				var data = response.responseJSON;
				var actionsCtrl = new ActionsController();
				actionsCtrl.ShowMessage('E', data.ExceptionMessage);
				console.log(data);
			})
    };

    this.DeleteToAPI = function (service, data) {
		var jqxhr = $.delete(this.GetUrlApiService(service), data, function (response) {
			var actionsCtrl = new ActionsController();
			actionsCtrl.ShowMessage('I', response.Message);
		})
			.fail(function (response) {
				var data = response.responseJSON;
				var actionsCtrl = new ActionsController();
				actionsCtrl.ShowMessage('E', data.ExceptionMessage);
				console.log(data);
			})
    };
}