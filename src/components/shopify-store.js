import React, { useEffect, useState } from 'react'

const STORE_CREDS = {
  domain: '9fe52e.myshopify.com',
  storefrontAccessToken: 'fe31b82335eecdc5ce34ee81c2b38a74', // previously apiKey, now deprecated
}

const ShopifyStore = (props) => {
  const ShopifyBuy = window.ShopifyBuy

  useEffect(() => {
    if (ShopifyBuy) {
      const client = ShopifyBuy.buildClient(STORE_CREDS)
      const ui = ShopifyBuy.UI.init(client)

      client.product.fetchAll().then((products) => {
        console.log(`🚀 ~ client.product.fetchAll ~ products:`, JSON.stringify(products, null, 2))
        const productIds = products.map((product) => product.id.split('Product/').pop())
        ui.createComponent('productSet', {
          id: productIds,
          node: document.getElementById('products-list'),
        })
      })
    }
  }, [])

  return (
    <div>
      <div id="products-list"></div>
    </div>
  )
}

export default ShopifyStore
