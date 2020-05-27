<template>
  <div>
      

        <div ref="sideNav" class="bm-menu">
            <nav class="bm-item-list">
                <slot>
                  <a href="#"> home</a>
                </slot>
            </nav>
            <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                <span v-for="(x, index) in 2" :key="x" class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '14px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">
                </span>
            </span>
        </div>

        <div ref="bmBurgerButton" class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
            <span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>
        </div>

    </div>

</template>