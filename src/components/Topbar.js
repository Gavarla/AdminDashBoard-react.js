import "./topbar.css";
import { NotificationsNone , Language , Settings } from '@material-ui/icons';
// import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">lamaadmin</span>
            </div>
            <div className="topRight">
                   <div className="topbarIconContainer">
                          <NotificationsNone />
                          <span className="topIconBadge">5</span>
                      </div>

                     <div className="topbarIconContainer">
                          <Language />
                          <span className="topIconBadge">2</span>
                      </div>

                      <div className="topbarIconContainer">
                          <Settings />
                      </div>
                     <img src="https://images.pexels.com/photos/10040258/pexels-photo-10040258.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topAvatar" />
                     
             </div>        
        </div>
    </div>
  )
}
