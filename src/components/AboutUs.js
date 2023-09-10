import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutUs() {
  const about = useSelector(state => state?.suitsReducer?.data[0]?.about);
  
  return (
    <div className='about-us'>
      <div className='about-info-container'>
        <h1>About Us</h1>
        <div className='about-us-text'>
          {
            about?.map(data => {
              return (
                <div key={data.id}>{data.info}</div>
              )
            })
          }
        </div>
      </div>
      <div className='contact-us-form-container'>
        <form className='contact-us-form'>
          <div>
            <label>First Name</label>
            <div className='input-container'>
              <input type='text'/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div className='input-container'>
              <input type='text'/>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div className='input-container'>
              <input type='email'/>
            </div>
          </div>
          <div>
            <label>What can we do to help you?</label>
            <div className='input-container'>
              <textarea></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


// <p>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque malesuada eros, in lobortis diam. Vestibulum laoreet cursus rutrum. Pellentesque placerat diam vitae convallis fringilla. Morbi a aliquam metus. Aliquam at pulvinar tortor. Vestibulum lacinia enim a ipsum vehicula elementum. Aliquam erat volutpat. Donec at dapibus sapien. Morbi eget risus sit amet quam hendrerit accumsan vel eget urna. Pellentesque a justo ac quam malesuada volutpat ac ac purus. Etiam tincidunt massa eu pulvinar commodo. Duis rhoncus magna nec erat fermentum, at tempor arcu sollicitudin.
// </p>
// <p>
//   Pellentesque laoreet tortor vel metus iaculis ultricies. Curabitur ligula nulla, malesuada vel ex quis, hendrerit ultrices nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam id sapien rhoncus, eleifend magna at, sagittis elit. Praesent et suscipit ipsum. Sed faucibus orci risus, eu euismod augue malesuada quis. Nunc in massa justo. Ut molestie facilisis magna ac sodales. Suspendisse nunc nisl, imperdiet a laoreet quis, eleifend vel ligula. Proin in tristique nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dignissim tellus ante, quis tempor purus scelerisque porttitor. Aliquam at sollicitudin velit.
// </p>
// <p>
//   Pellentesque pellentesque ac dolor non finibus. Quisque blandit quam magna, eget tempor augue dignissim at. Donec vitae viverra sem, vel convallis elit. Praesent dignissim maximus laoreet. Sed in elit mauris. Quisque id pharetra magna. Maecenas consectetur arcu justo, sed dapibus sem rhoncus sed. Mauris in ultricies magna. Mauris ex sapien, elementum sit amet ultricies eget, dapibus tristique massa. Sed sollicitudin ut magna vel facilisis.
// </p>
// <p>
//  Curabitur et lobortis ipsum, et ultrices mi. Duis tristique mattis diam, nec bibendum tellus lacinia at. Vestibulum enim neque, imperdiet in turpis at, efficitur semper nisi. Suspendisse justo mi, gravida sed orci et, posuere bibendum felis. Donec in tincidunt sem. Suspendisse sodales nulla ut augue sodales sagittis. Donec fringilla elit quis elementum scelerisque. Vestibulum sapien enim, malesuada id ornare eget, mollis nec arcu. Pellentesque tempor rutrum ante, et volutpat quam luctus eu. Vestibulum quis sollicitudin felis. Sed auctor pharetra lectus et porttitor.
// </p>