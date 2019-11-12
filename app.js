// Vue instance
new Vue({
	el: "#vue-app",
	data: {
			health: 100,
			ended: false
	},
	methods: {
		punch: function() {
			this.health -= 10;
			if(this.health < 10){
				 this.ended = true;
			} 
		},
		reset: function() {
			this.health = 100;
			this.ended = false;
		}
	},
	computed: {

	}
})