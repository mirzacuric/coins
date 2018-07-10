import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  const createComponent = () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    return vm
  }
  it('should render correct contents for h1', () => {
    const vm = createComponent()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
  it('should render correct href for a tag', () => {
    const vm = createComponent()
    expect(vm.$el.querySelector('a').getAttribute('href'))
      .to.equal('https://vuejs.org')
  })
})
