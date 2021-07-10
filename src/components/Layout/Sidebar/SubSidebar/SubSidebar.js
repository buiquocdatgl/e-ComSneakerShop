import React, { useState} from 'react'

function SubMenu({ img, pdName, pdItem, styled }){
    const [open ,setOpen] = useState(false);
    
    return(
        <li 
        className={open ? 'active-menu open' : 'active-menu'} 
        onClick={() => setOpen(!open)}
        style={styled}
        >
            <a href="#MenuUser">
                <div className="icon-menu">
                    <img src={img} alt="logoAdidas" />
                </div>
                {pdName}
                <i className="fa fa-caret-down" />
            </a>
            <ul className="sub-menu">
                {pdItem.map((pd ,i) =>(
                    <li key = {i}>
                        <a href="#MenuUser">{pd}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}

function SubSidebar() {

    return (
        <nav>
            <ul className="menu">
              <li style={{ "--i": "1" }}> 
                  <a href="#MenuUser" className="active">trang chủ</a>
              </li>
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2Fadidas.png?alt=media&token=d51a8b78-da6e-4dc1-8171-aae69a271e2b'
                  pdName='Addidas'
                  pdItem={[
                      'Addidas Prophere',
                      'Addidas Nmd',
                      'Addidas Yezzy',
                      'Addidas Falcon',
                      'Addidas Stan Smith',
                      'Addidas Alphabounce',
                      'Addidas Superstar'
                  ]}
              />
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2Fnike.png?alt=media&token=dc61f94c-e261-4a95-b5fc-28a8d08b1630'
                  pdName='Nike'
                  pdItem={[
                      'Nike M2k Teko',
                      'Nike Cortez',
                      'Nike Jordan',
                      'Nike Air Max'
                  ]}
              />
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2FVans.png?alt=media&token=f30415be-71e7-4fb1-b74d-d28f06b1b9e6'
                  pdName='Vans'
                  pdItem={[
                      'Vans Sk8 Hi',
                      'Vans Sneaker',
                      'Vans Anaheim Factory',
                      'Vans Era',
                      'Vans Authentic',
                      'Vans Classic'
                  ]}
              />
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2FnewBalance.png?alt=media&token=d82dfec4-68d5-4dcf-9498-bce0c35a57e7'
                  pdName='New Balance'
                  pdItem={[
                      'New Balance'
                  ]}
              />
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2Fpuma.png?alt=media&token=257ac50c-d9de-4c97-8361-abed9a56b417'
                  pdName='Puma'
                  pdItem={[
                      'Puma Rsx',
                      'Puma Rsx Super',
                      'Puma Rsx Puzzle'
                  ]}
              />
              <SubMenu 
                  img='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/iconmenu%2Fconverse.png?alt=media&token=32aa515f-83a8-4e91-8cec-2356b8415114'
                  pdName='Converse'
                  pdItem={[
                      'Converse Chuck 70',
                      'Converse Sneakers',
                      'Converse Renew'
                  ]}
              />
            </ul>
        </nav>
      )
}

export default SubSidebar