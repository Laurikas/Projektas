import React, { useEffect, useState } from 'react';
import './shopify-store.css';

const STORE_CREDS = {
  domain: '9fe52e.myshopify.com',
  storefrontAccessToken: 'fe31b82335eecdc5ce34ee81c2b38a74', // previously apiKey, now deprecated
}

const ShopifyBuy = window.ShopifyBuy
const client = ShopifyBuy.buildClient(STORE_CREDS)
const ui = ShopifyBuy.UI.init(client)

const ShopifyStore = (props) => {
  const [collections, setCollections] = useState()

  useEffect(() => {
    if (ShopifyBuy) {
      // const buttonTemplate = '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>';

      const loadShopifyCollections = async () => {
        const shopifyCollections = await client.collection.fetchAllWithProducts()
        setCollections(shopifyCollections)
      }

      loadShopifyCollections()
    }
  }, [])

  const handleCollectionClick = (selectedCollection) => {
    const productIds = selectedCollection.products.map((product) => product.id.split('Product/').pop())
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
    ui.createComponent('productSet', {
      id: productIds,
      node: document.getElementById('products-list'),
      options: {
        product: {
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': 'calc(25% - 20px)',
                'margin-left': '20px',
                'margin-bottom': '50px',
              },
            },
            title: {
              'font-family': 'Montserrat, sans-serif',
            },
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#000000',
              },
              'background-color': '#000000',
              ':focus': {
                'background-color': '#000000',
              },
              'border-radius': '40px',
              'padding-left': '20px',
              'padding-right': '20px',
            },
            price: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
            },
            compareAt: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
            },
            unitPrice: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
            },
          },
          buttonDestination: 'modal',
          contents: {
            button: false,
            options: false,
          },
          isButton: true,
          text: {
            button: 'View product',
          },
          googleFonts: ['Montserrat'],
        },
        productSet: {
          styles: {
            products: {
              '@media (min-width: 601px)': {
                'margin-left': '-20px',
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-left': '0px',
                'margin-bottom': '0px',
              },
            },
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#000000',
              },
              'background-color': '#000000',
              ':focus': {
                'background-color': '#000000',
              },
              'border-radius': '40px',
              'padding-left': '20px',
              'padding-right': '20px',
            },
            title: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'font-size': '30px',
              color: '#4c4c4c',
            },
            price: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'font-size': '20px',
              color: '#4c4c4c',
            },
            compareAt: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'font-size': '17px',
              color: '#4c4c4c',
            },
            unitPrice: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'font-size': '17px',
              color: '#4c4c4c',
            },
            description: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'font-size': '16px',
            },
          },
          googleFonts: ['Montserrat'],
          text: {
            button: 'Add to cart',
          },
        },
        option: {},
        cart: {
          styles: {
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#000000',
              },
              'background-color': '#000000',
              ':focus': {
                'background-color': '#000000',
              },
              'border-radius': '40px',
            },
            title: {
              color: '#000000',
            },
            header: {
              color: '#000000',
            },
            lineItems: {
              color: '#000000',
            },
            subtotalText: {
              color: '#000000',
            },
            subtotal: {
              color: '#000000',
            },
            notice: {
              color: '#000000',
            },
            currency: {
              color: '#000000',
            },
            close: {
              color: '#000000',
              ':hover': {
                color: '#000000',
              },
            },
            empty: {
              color: '#000000',
            },
            noteDescription: {
              color: '#000000',
            },
            discountText: {
              color: '#000000',
            },
            discountIcon: {
              fill: '#000000',
            },
            discountAmount: {
              color: '#000000',
            },
            cart: {
              'background-color': '#f1f1f1',
            },
            footer: {
              'background-color': '#f1f1f1',
            },
          },
          text: {
            title: 'Your cart',
            total: 'Subtotal',
            notice: '',
            button: 'Checkout',
          },
          googleFonts: ['Montserrat'],
        },
        toggle: {
          styles: {
            toggle: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'background-color': '#000000',
              ':hover': {
                'background-color': '#000000',
              },
              ':focus': {
                'background-color': '#000000',
              },
            },
          },
          googleFonts: ['Montserrat'],
        },
        lineItem: {
          styles: {
            variantTitle: {
              color: '#000000',
            },
            title: {
              color: '#000000',
            },
            price: {
              color: '#000000',
            },
            fullPrice: {
              color: '#000000',
            },
            discount: {
              color: '#000000',
            },
            discountIcon: {
              fill: '#000000',
            },
            quantity: {
              color: '#000000',
            },
            quantityIncrement: {
              color: '#000000',
              'border-color': '#000000',
            },
            quantityDecrement: {
              color: '#000000',
              'border-color': '#000000',
            },
            quantityInput: {
              color: '#000000',
              'border-color': '#000000',
            },
          },
        },
      },
    })
  }

  return (
    <div>
      <div className="category-button-container">
        {collections && collections.map((col, index) => (<button className="category-button" onClick={() => handleCollectionClick(col)} key={index}>{col.title}</button>))}
      </div>
      <div id="products-list"></div>
    </div>
  )
}

export default ShopifyStore