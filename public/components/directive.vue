<template>
	<div style="height: 200px; overflow: hidden;" v-iscroll="initMainList">
		<div >
			钩子函数被赋予了以下参数：
				el：指令所绑定的元素，可以用来直接操作 DOM 。
				binding：一个对象，包含以下属性：
				name：指令名，不包括 v- 前缀。
				value：指令的绑定值，例如：v-my-directive="1 + 1", value 的值是 2。
				oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
				expression：绑定值的字符串形式。例如 v-my-directive="1 + 1" ，expression 的值是 "1 + 1"。
				arg：传给指令的参数。例如 v-my-directive:foo，arg 的值是 "foo"。
				modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
				vnode：Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
				oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
				除了 el 之外，其它参数都应该是只读的，尽量不要修改他们。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。

				一个使用了这些参数的自定义钩子样例：
				Vue.directive('demo', {
				  bind: function (el, binding, vnode) {
				    var s = JSON.stringify
				    el.innerHTML =
				      'name: '       + s(binding.name) + '<br>' +
				      'value: '      + s(binding.value) + '<br>' +
				      'expression: ' + s(binding.expression) + '<br>' +
				      'argument: '   + s(binding.arg) + '<br>' +
				      'modifiers: '  + s(binding.modifiers) + '<br>' +
				      'vnode keys: ' + Object.keys(vnode).join(', ')
				  }
				})
				new Vue({
				  el: '#hook-arguments-example',
				  data: {
				    message: 'hello!'
				  }
				})
				name: "demo"
				value: "hello!"
				expression: "message"
				argument: "foo"
				modifiers: {"a":true,"b":true}
				vnode keys: tag, data, children, text, elm, ns, context, functionalContext, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
				函数简写

				大多数情况下，我们可能想在 bind 和 update 钩子上做重复动作，并且不想关心其它的钩子函数。可以这样写:
				Vue.directive('color-swatch', function (el, binding) {
				  el.style.backgroundColor = binding.value
				})
				对象字面量

				如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法类型的 JavaScript 表达式。
				Vue.directive('demo', function (el, binding) {
				  console.log(binding.value.color) // => "white"
				  console.log(binding.value.text)  // => "hello!"
				})
				← 混合 渲染函数 & JSX →
				发现错误？想参与编辑？ 在 Github 上编辑此页！
		</div>
	</div>
</template>
<script >
	export default {
		mounted() {
			this.$nextTick(() => {
				this.initMainList = {
					scrollBottom: 0
				}
				this.refreshScroll();
			})
		},
		data() {
			return {
				initMainList: false
			}
		},
		methods: {
			refreshScroll() {
				this.$nextTick(() => {
					['initMainList'].forEach(list => {
						this[list] = !this[list];
					})
				})
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
	div{
		color: #333;
	}
</style>
