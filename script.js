Vue.component('signUpForm',{

	template : "#signUpForm",

	methods : {
		chnageToTnc : function(){
			this.$emit('change','tnc');
		}
	}
});

Vue.component('tnc',{

	template : "#tnc",

	methods : {
		backToSignUp : function(){
			this.$emit('change','signUpForm');
		}
	}
});

new Vue({

	el : "#app",

	data : {
		componentName : "signUpForm",
	},

	methods : {
		change : function(newCom){
			this.componentName = newCom;
		}
	}
})