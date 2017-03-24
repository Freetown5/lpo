import Vue from 'vue'
import Home from 'src/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Logo Here')
  })
})