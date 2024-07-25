<template>
	<div class="home">
		<div class="btBox">
			{{ $t('r.testMsg') + ' | ' + $t('e.testTxt') }}
			<Select v-model="locale" style="margin-right: 10px;width: 80px;">
				<Option value="zh">中文</Option>
				<Option value="en">English</Option>
				<Option value="ru">Pусский</Option>
			</Select>
			<span @click="loginH">{{ isLogin ? '登出' : '登录' }}</span>
		</div>
		<img class="brandK" alt="Vue logo" src="../assets/logo.png" />
		<div class="brandBox">
			<span style="font-size: 18px">首页 </span>
			<hello-r style="margin-left: 10px" />
		</div>
		<div>
			<div class="menuBox">
				<h1>目录</h1>
				<ol class="menuList">
					<div class="mold" v-for="(item, index) of routeArr" :key="'menu' + index">
						<div class="tit">
							<i class="iconfont icon-label"></i>
							<span>{{ item.name }}</span>
						</div>
						<div class="cont">
							<router-link
								class="li"
								v-for="(subItem, ix) of item.children"
								:to="subItem.path"
								:key="'subItem' + ix"
								:style="{ background: subItem.meta.bg }"
								:title="subItem.meta.title"
							>
								<div class="show bz-button-animated" :class="subItem.meta.cls">
									<div class="icon">
										<i class="iconfont" :class="subItem.meta.icon"></i>
									</div>
									<div class="txt">{{ subItem.name }}</div>
									<!--随动画，显示四条边-->
									<div class="inner"></div>
								</div>
							</router-link>
						</div>
					</div>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /examples
	import { mapState, mapWritableState } from 'pinia'
	import { useStore } from '../store'
	import TestHouse from '../components/testHouse'

	export default {
		name: 'home',
		components: { TestHouse },
		data() {
			return {
				active: [],
				routeArr: [],
				locale: window.localStorage.getItem('locale')||'zh'
			}
		},
		computed: {
			...mapState(useStore, ['isLogin']), ...mapWritableState(useStore, ['locale'])
		},
		created() {
			this.routeArr = this.$router.options.routes.filter((e) => {
				if (e?.name && e.name !== 'login' && e.name !== 'index') {
					return e
				}
			})
		},
		watch: {
			locale(after) {
				this.$i18n.locale = after
				window.localStorage.setItem('locale', after)
			}
		},
		methods: {
			loginH() {
				if (this.isLogin) {
					const store = useStore()
					store.logout()
				}
				else {
					this.$router.push('login')
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.home {
		padding-top: 20px;

		.btBox {
			position: absolute;
			top: 10px;
			right: 20px;

			> span {
				margin-left: 10px;
				color: #46be87;
				cursor: pointer;

				&:hover {
					opacity: 0.85;
				}
			}
		}

		.brandK {
			position: absolute;
			top: 30px;
			left: 50px;
			height: 25px;
		}

		.brandBox {
			height: 50px;
			padding-left: 90px;
			line-height: 50px;
		}

		.menuBox {
			padding: 20px 20px 20px 80px;
			overflow-y: auto;

			.menuList {
				width: 100%;
				margin: 0 auto;
				overflow: hidden;

				.mold {
					width: 100%;
					height: auto;
					margin: 5px 0;

					.tit {
						font-size: 20px;
						height: 30px;
						line-height: 30px;
						margin-bottom: 10px;
						color: #24abf2;

						i {
							margin-right: 10px;
						}

						span {
							font-weight: bold;
						}
					}

					.cont {
						width: 100%;
						margin: 0 auto;
						overflow: hidden;

						.li {
							cursor: default;
							width: 200px;
							background-color: #46be87;
							border-radius: 4px;
							display: block;
							float: left;
							margin: 0 30px 30px 0;
							position: relative;

							.show {
								position: relative;
								cursor: pointer;
								color: white;
								overflow: hidden;

								.icon {
									height: 30px;
									line-height: 30px;
									overflow: hidden;
									margin: 10px 0 10px;
									text-align: center;

									i {
										font-size: 30px;
									}
								}

								.txt {
									font-size: 16px;
									height: 25px;
									line-height: 20px;
									color: #fff;
									width: 100%;
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}

	/**
    规定鼠标移入时动画效果
    bz-button-animated       //规定线条显示
    clockwise             //规定动画顺时针
    counterclockwise      //规定动画逆时针
    horizontal            //上下两条边框出现线条
    vertical              //左右两条边框出现线条
    both                  //四条边框出现线条
   **/
	.bz-button-animated {
		position: relative;
	}

	.bz-button-animated .inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.bz-button-animated:nth-of-type(1):before,
	.bz-button-animated:nth-of-type(1):after,
	.bz-button-animated:nth-of-type(1) .inner:before,
	.bz-button-animated:nth-of-type(1) .inner:after {
		background-color: #ffa726;
	}

	.bz-button-animated:nth-of-type(2):before,
	.bz-button-animated:nth-of-type(2):after,
	.bz-button-animated:nth-of-type(2) .inner:before,
	.bz-button-animated:nth-of-type(2) .inner:after {
		background-color: #26a69a;
	}

	.bz-button-animated:nth-of-type(3):before,
	.bz-button-animated:nth-of-type(3):after,
	.bz-button-animated:nth-of-type(3) .inner:before,
	.bz-button-animated:nth-of-type(3) .inner:after {
		background-color: #7e57c2;
	}

	.bz-button-animated:before,
	.bz-button-animated:after,
	.bz-button-animated .inner:before,
	.bz-button-animated .inner:after {
		position: absolute;
		content: '';
		display: block;
		-webkit-transition: -webkit-transform 0.3s;
		transition: -webkit-transform 0.3s;
		transition: transform 0.3s;
		transition: transform 0.3s,
		-webkit-transform 0.3s;
	}

	.bz-button-animated.horizontal:before,
	.bz-button-animated.horizontal:after,
	.bz-button-animated.both:before,
	.bz-button-animated.both:after {
		left: 0;
		width: 100%;
		height: 2px;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
	}

	.bz-button-animated.horizontal .inner:before,
	.bz-button-animated.horizontal .inner:after,
	.bz-button-animated.both .inner:before,
	.bz-button-animated.both .inner:after {
		top: 0;
		width: 2px;
		height: 100%;
		-webkit-transform: scaleY(0);
		transform: scaleY(0);
	}

	.bz-button-animated.horizontal .inner:before,
	.bz-button-animated.both .inner:before {
		left: 0;
	}

	.bz-button-animated.horizontal .inner:after,
	.bz-button-animated.both .inner:after {
		right: 0;
	}

	.bz-button-animated.horizontal .inner:hover:before,
	.bz-button-animated.horizontal .inner:hover:after,
	.bz-button-animated.both .inner:hover:before,
	.bz-button-animated.both .inner:hover:after {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
	}

	.bz-button-animated.horizontal:before,
	.bz-button-animated.both:before {
		top: 0;
	}

	.bz-button-animated.horizontal:after,
	.bz-button-animated.both:after {
		bottom: 0;
	}

	.bz-button-animated.horizontal:hover:before,
	.bz-button-animated.horizontal:hover:after,
	.bz-button-animated.both:hover:before,
	.bz-button-animated.both:hover:after {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	.bz-button-animated.horizontal:hover .inner:before,
	.bz-button-animated.horizontal:hover .inner:after,
	.bz-button-animated.both:hover .inner:before,
	.bz-button-animated.both:hover .inner:after {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
	}

	.bz-button-animated.horizontal.clockwise .inner:before,
	.bz-button-animated.both.clockwise .inner:before {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.horizontal.clockwise .inner:after,
	.bz-button-animated.both.clockwise .inner:after {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.horizontal.clockwise:before,
	.bz-button-animated.both.clockwise:before {
		-webkit-transform-origin: right center;
		transform-origin: right center;
	}

	.bz-button-animated.horizontal.clockwise:after,
	.bz-button-animated.both.clockwise:after {
		-webkit-transform-origin: left center;
		transform-origin: left center;
	}

	.bz-button-animated.horizontal.clockwise:hover .inner:before,
	.bz-button-animated.both.clockwise:hover .inner:before {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.horizontal.clockwise:hover .inner:after,
	.bz-button-animated.both.clockwise:hover .inner:after {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.horizontal.clockwise:hover:before,
	.bz-button-animated.both.clockwise:hover:before {
		-webkit-transform-origin: left center;
		transform-origin: left center;
	}

	.bz-button-animated.horizontal.clockwise:hover:after,
	.bz-button-animated.both.clockwise:hover:after {
		-webkit-transform-origin: right center;
		transform-origin: right center;
	}

	.bz-button-animated.horizontal.counterclockwise .inner:before,
	.bz-button-animated.both.counterclockwise .inner:before {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.horizontal.counterclockwise .inner:after,
	.bz-button-animated.both.counterclockwise .inner:after {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.horizontal.counterclockwise:before,
	.bz-button-animated.both.counterclockwise:before {
		-webkit-transform-origin: left center;
		transform-origin: left center;
	}

	.bz-button-animated.horizontal.counterclockwise:after,
	.bz-button-animated.both.counterclockwise:after {
		-webkit-transform-origin: right center;
		transform-origin: right center;
	}

	.bz-button-animated.horizontal.counterclockwise:hover .inner:before,
	.bz-button-animated.both.counterclockwise:hover .inner:before {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.horizontal.counterclockwise:hover .inner:after,
	.bz-button-animated.both.counterclockwise:hover .inner:after {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.horizontal.counterclockwise:hover:before,
	.bz-button-animated.both.counterclockwise:hover:before {
		-webkit-transform-origin: right center;
		transform-origin: right center;
	}

	.bz-button-animated.horizontal.counterclockwise:hover:after,
	.bz-button-animated.both.counterclockwise:hover:after {
		-webkit-transform-origin: left center;
		transform-origin: left center;
	}

	.bz-button-animated.vertical:before,
	.bz-button-animated.vertical:after {
		top: 0;
		width: 2px;
		height: 100%;
		-webkit-transform: scaleY(0);
		transform: scaleY(0);
	}

	.bz-button-animated.vertical:before {
		left: 0;
	}

	.bz-button-animated.vertical:after {
		right: 0;
	}

	.bz-button-animated.vertical:hover:before,
	.bz-button-animated.vertical:hover:after {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
	}

	.bz-button-animated.vertical.clockwise:before {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.vertical.clockwise:after {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.vertical.clockwise:hover:before {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.vertical.clockwise:hover:after {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.vertical.counterclockwise:before {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}

	.bz-button-animated.vertical.counterclockwise:after {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.vertical.counterclockwise:hover:before {
		-webkit-transform-origin: top center;
		transform-origin: top center;
	}

	.bz-button-animated.vertical.counterclockwise:hover:after {
		-webkit-transform-origin: bottom center;
		transform-origin: bottom center;
	}
</style>
