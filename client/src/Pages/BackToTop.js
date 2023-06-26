import React from 'react'

export default function BackToTop() {

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  return (
    <div><a
    href="true"
    className="back-to-top d-flex rounded-circle align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short " />
  </a></div>
  )
}
