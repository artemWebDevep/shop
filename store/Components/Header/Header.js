class Header {
    
    handlerOpenShoppingPage(){
        shoppingPage.render()
    }

    render(count) {
        const html = `
        <div class="navbar-fixed">
          <nav>
          <div class="nav-wrapper">
            <img class="shop" src="./static/images/Icons/fire.svg" alt="">
            <a href="index.html" class="brand-logo"><Logo>Survivor store</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li>
              <a onclick="headerPage.handlerOpenShoppingPage();">Корзина ${count}шт. </a>
              </li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Пункты выдачи</a></li>
              <li><a href="#">Помощь</a></li>
              <li><a href="#">О нас</a></li>
              
            </ul>
          </div>
        </nav>
      </div>
    
      <ul class="sidenav" id="mobile-demo">
        <li><a onclick="headerPage.handlerOpenShoppingPage();">Корзина ${count}</a></li>
        <li><a href="#">Доставка</a></li>
        <li><a href="#">Пункты выдачи</a></li>
        <li><a href="#">Помощь</a></li>
        <li><a href="#">О нас</a></li>
      </ul>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header()

const productStore = localStorageUtil.getProducts()



headerPage.render(productStore.length)