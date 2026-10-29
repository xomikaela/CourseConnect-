// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useAuth } from "../Auth/authContext";
// import "./Profile.css";

// export default function Profile() {
//   const { logout, token } = useAuth();
//   const [username, setUsername] = useState("");
//   const [activeGroups, setActiveGroups] = useState([]);
//   const [activeAssignments, setActiveAssignments] = useState([]);

//   useEffect(() => {
//     async function getProfile() {
//       if (!token) return;

//       const response = await fetch(`${import.meta.env.VITE_API}/users/me`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const user = await response.json();
//         setUsername(user.username);
//       }
//       const getGroup = await fetch(`${import.meta.env.VITE_API}/groups`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (getGroup.ok) {
//         const groups = await getGroup.json();
//         setActiveGroups(groups);
//       }
//       const getAssignments = await fetch(
//         `${import.meta.env.VITE_API}/assignments`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       if (getAssignments.ok) {
//         const assignments = await getAssignments.json();

//         setActiveAssignments(
//           assignments.filter((assignment) => !assignment.is_complete),
//         );
//       }
//     }

//     getProfile();
//   }, [token]);
//   return (
//     <div className="profile-page">
//       <header className="profile-topbar">
//         <Link to="/" className="profile-logo" aria-label="Course Connect home">
//           <span className="profile-cc-logo" aria-hidden="true">
//             <span className="profile-cc-shape profile-cc-purple"></span>
//             <span className="profile-cc-shape profile-cc-orange"></span>
//           </span>

//           <span className="profile-logo-text">
//             Course <strong>Connect</strong>
//           </span>
//         </Link>

//         <nav className="profile-nav">
//           <Link to="/" className="profile-nav-link">
//             Home
//           </Link>

//           <Link to="/Groups" className="profile-nav-link">
//             Groups
//           </Link>

//           <Link to="/Study" className="profile-nav-link">
//             Study
//           </Link>

//           <Link to="/Assignments" className="profile-nav-link">
//             Assignments
//           </Link>

//           <Link to="/Profile" className="profile-nav-link active">
//             Profile
//           </Link>
//         </nav>

//         <div className="profile-nav-actions">
//           <div className="profile-search-small">
//             <svg viewBox="0 0 24 24" aria-hidden="true">
//               <circle cx="11" cy="11" r="6"></circle>
//               <path d="m16 16 4 4"></path>
//             </svg>

//             <input
//               type="search"
//               placeholder="Search..."
//               aria-label="Search Course Connect"
//             />
//           </div>

//           <div className="profile-circle">M</div>
//         </div>
//       </header>

//       <main className="profile-main">
//         <section className="profile-hero">
//           <div className="profile-avatar">M</div>

//           <div className="profile-hero-content">
//             <p className="profile-eyebrow">YOUR PROFILE</p>

//             <h1>
//               Welcome back.
//               <span>Keep growing.</span>
//             </h1>

//             <p>
//               Your Course Connect space for keeping up with your groups,
//               assignments, and study progress.
//             </p>
//           </div>

//           <div className="profile-hero-note" aria-hidden="true">
//             <p>
//               Learn.
//               <br />
//               Connect.
//               <br />
//               Succeed.
//             </p>
//           </div>
//         </section>

//         <section className="profile-stats">
//           <article className="profile-stat-card">
//             <span className="profile-stat-icon purple">
//               <svg viewBox="0 0 24 24" aria-hidden="true">
//                 <circle cx="9" cy="8" r="3"></circle>
//                 <circle cx="17" cy="9" r="2"></circle>
//                 <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"></path>
//                 <path d="M15 14c3 0 5 1.7 5 4"></path>
//               </svg>
//             </span>

//             <div>
//               <strong>0</strong>
//               <p>Active Groups</p>
//             </div>
//           </article>

//           <article className="profile-stat-card">
//             <span className="profile-stat-icon orange">
//               <svg viewBox="0 0 24 24" aria-hidden="true">
//                 <path d="M12 5v14M5 12h14"></path>
//               </svg>
//             </span>

//             <div>
//               <strong>0</strong>
//               <p>Created Groups</p>
//             </div>
//           </article>

//           <article className="profile-stat-card">
//             <span className="profile-stat-icon yellow">
//               <svg viewBox="0 0 24 24" aria-hidden="true">
//                 <path d="m5 12 4 4L19 6"></path>
//               </svg>
//             </span>

//             <div>
//               <strong>0</strong>
//               <p>Completed</p>
//             </div>
//           </article>
//         </section>

//         <section className="profile-content-grid">
//           <div className="profile-card">
//             <div className="profile-card-heading">
//               <div>
//                 <p>YOUR COMMUNITY</p>
//                 <h2>Active Groups</h2>
//               </div>

//               <Link to="/Groups">View Groups →</Link>
//             </div>

//             <div className="profile-empty">
//               <span className="profile-empty-icon purple">
//                 <svg viewBox="0 0 24 24" aria-hidden="true">
//                   <circle cx="9" cy="8" r="3"></circle>
//                   <circle cx="17" cy="9" r="2"></circle>
//                   <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"></path>
//                   <path d="M15 14c3 0 5 1.7 5 4"></path>
//                 </svg>
//               </span>

//               <div>
//                 <h3>No active groups yet</h3>
//                 <p>Your study groups will appear here.</p>
//               </div>
//             </div>
//           </div>

//           <div className="profile-card">
//             <div className="profile-card-heading">
//               <div>
//                 <p>CREATED BY YOU</p>
//                 <h2>Created Groups</h2>
//               </div>

//               <Link to="/Groups">Create Group →</Link>
//             </div>

//             <div className="profile-empty">
//               <span className="profile-empty-icon orange">
//                 <svg viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M12 5v14M5 12h14"></path>
//                 </svg>
//               </span>

//               <div>
//                 <h3>Start a new study group</h3>
//                 <p>Groups you create will show up here.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="profile-progress">
//           <div className="profile-progress-heading">
//             <div>
//               <p>YOUR PROGRESS</p>
//               <h2>Learning Activity</h2>
//             </div>
//           </div>

//           <div className="profile-progress-grid">
//             <article>
//               <span className="progress-icon yellow">✓</span>

//               <div>
//                 <strong>Completed Assignments</strong>
//                 <p>0 completed</p>
//               </div>
//             </article>

//             <article>
//               <span className="progress-icon purple">✦</span>

//               <div>
//                 <strong>Completed Tests</strong>
//                 <p>0 completed</p>
//               </div>
//             </article>

//             <article>
//               <span className="progress-icon orange">○</span>

//               <div>
//                 <strong>Posts</strong>
//                 <p>0 posts</p>
//               </div>
//             </article>
//           </div>
//         </section>

//         <section className="profile-motivation">
//           <span>✦</span>

//           <div>
//             <p>KEEP GOING</p>
//             <h2>Every study session counts.</h2>
//           </div>
//         </section>

//         <footer className="profile-footer">
//           <span>Course Connect</span>

//           <p>Study • Plan • Connect • Succeed</p>
//         </footer>
//       </main>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useAuth } from "../Auth/authContext";
import { useEffect, useState } from "react";
import "../Pages/css/profile.css";

const API = import.meta.env.VITE_API;

export default function Profile() {
  const { logout, token } = useAuth();
  const [username, setUsername] = useState("");
  const [activeGroups, setActiveGroups] = useState([]);
  const [activeAssignments, setActiveAssignments] = useState([]);

  useEffect(() => {
    async function getProfile() {
      if (!token) {
        setUsername("");
        setActiveGroups([]);
        setActiveAssignments([]);
        return;
      }

      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(`${API}/users/me`, { headers });

        if (response.ok) {
          const user = await response.json();
          setUsername(user.username);
        }

        const groupsResponse = await fetch(`${API}/groups`, { headers });

        if (groupsResponse.ok) {
          const groups = await groupsResponse.json();
          setActiveGroups(groups);
        }

        const assignmentsResponse = await fetch(`${API}/assignments`, {
          headers,
        });

        if (assignmentsResponse.ok) {
          const assignments = await assignmentsResponse.json();

          setActiveAssignments(
            assignments.filter((assignment) => !assignment.is_complete),
          );
        }
      } catch (error) {
        console.error("Could not load profile:", error);
      }
    }

    getProfile();
  }, [token]);

  const firstInitial = username ? username.charAt(0).toUpperCase() : "?";

  return (
    <div className="profile-page">
      <header className="profile-topbar">
        <Link to="/" className="profile-logo" aria-label="Course Connect home">
          <span className="profile-cc-logo" aria-hidden="true">
            <span className="profile-cc-shape profile-cc-purple"></span>
            <span className="profile-cc-shape profile-cc-orange"></span>
          </span>

          <span className="profile-logo-text">
            Course <strong>Connect</strong>
          </span>
        </Link>

        <nav className="profile-nav">
          <Link to="/" className="profile-nav-link">
            Home
          </Link>
          <Link to="/Study" className="profile-nav-link">
            Study
          </Link>
          <Link to="/Groups" className="profile-nav-link">
            Groups
          </Link>
          <Link to="/Assignments" className="profile-nav-link">
            Assignments
          </Link>
          <Link to="/Profile" className="profile-nav-link active">
            Profile
          </Link>
        </nav>

        <div className="profile-nav-actions">
          {token ? (
            <span
              className="profile-circle"
              title={`Logged in as ${username || "user"}`}
              aria-label={`Profile for ${username || "user"}`}
            >
              {firstInitial}
            </span>
          ) : (
            <Link to="/Login" className="profile-signin-button">
              Sign In
            </Link>
          )}
        </div>
      </header>

      <main className="profile-main">
        <section className="profile-hero">
          <div className="profile-avatar" aria-label="Profile initial">
            {firstInitial}
          </div>

          <div className="profile-hero-content">
            <p className="profile-eyebrow">YOUR COURSE CONNECT SPACE</p>

            <h1>
              Your Profile
              <span>{username ? `Hey, ${username}!` : "Welcome back!"}</span>
            </h1>

            <p>
              Keep up with your study groups, stay on top of assignments, and
              keep making progress toward your goals.
            </p>

            {token ? (
              <button
                type="button"
                className="profile-logout-button"
                onClick={logout}
              >
                Log Out
              </button>
            ) : (
              <Link to="/Login" className="profile-signin-button">
                Sign In
              </Link>
            )}
          </div>

          <div className="profile-hero-note">
            <p>
              Small steps,
              <br />
              big progress!
            </p>
          </div>
        </section>

        <section className="profile-stats">
          <article className="profile-stat-card">
            <span className="profile-stat-icon purple" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div>
              <strong>{activeGroups.length}</strong>
              <p>Active Groups</p>
            </div>
          </article>

          <article className="profile-stat-card">
            <span className="profile-stat-icon orange" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 7h8M8 12h8M8 17h5" />
              </svg>
            </span>
            <div>
              <strong>{activeAssignments.length}</strong>
              <p>Active Assignments</p>
            </div>
          </article>

          <article className="profile-stat-card">
            <span className="profile-stat-icon yellow" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>
            </span>
            <div>
              <strong>{activeGroups.length + activeAssignments.length}</strong>
              <p>Learning Activities</p>
            </div>
          </article>
        </section>

        <div className="profile-content-grid">
          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <p>LEARN TOGETHER</p>
                <h2>My Study Groups</h2>
              </div>
              <Link to="/Groups">Explore Groups →</Link>
            </div>

            {!token ? (
              <div className="profile-empty">
                <span className="profile-empty-icon purple">👥</span>
                <div>
                  <h3>Sign in to see your groups</h3>
                  <p>Your study groups will be waiting for you.</p>
                </div>
              </div>
            ) : activeGroups.length === 0 ? (
              <div className="profile-empty">
                <span className="profile-empty-icon purple">👥</span>
                <div>
                  <h3>No groups yet</h3>
                  <p>Find a group and start learning together.</p>
                </div>
              </div>
            ) : (
              <div className="profile-group-list">
                {activeGroups.map((group) => (
                  <article className="profile-group-card" key={group.group_id}>
                    <span className="profile-group-icon">📚</span>
                    <div>
                      <h3>{group.group_title}</h3>
                      <p>{group.group_description}</p>
                    </div>
                    <Link to={`/Groups/${group.group_id}`}>View →</Link>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <p>STAY ON TRACK</p>
                <h2>My Assignments</h2>
              </div>
              <Link to="/Assignments">View All →</Link>
            </div>

            {!token ? (
              <div className="profile-empty">
                <span className="profile-empty-icon orange">📝</span>
                <div>
                  <h3>Sign in to see assignments</h3>
                  <p>Your upcoming work will appear here.</p>
                </div>
              </div>
            ) : activeAssignments.length === 0 ? (
              <div className="profile-empty">
                <span className="profile-empty-icon orange">🎉</span>
                <div>
                  <h3>You're all caught up!</h3>
                  <p>You have no active assignments right now.</p>
                </div>
              </div>
            ) : (
              <div className="profile-assignment-list">
                {activeAssignments.map((assignment) => (
                  <article
                    className="profile-assignment-card"
                    key={assignment.assignment_id}
                  >
                    <div className="profile-assignment-top">
                      <span className="profile-assignment-icon">📝</span>
                      <span className="profile-assignment-status">
                        In Progress
                      </span>
                    </div>

                    <h3>{assignment.assignment_name}</h3>

                    <p className="profile-assignment-group">
                      {assignment.group_title}
                    </p>

                    <p className="profile-assignment-description">
                      {assignment.assignment_description}
                    </p>

                    <p className="profile-assignment-due">
                      <strong>Due:</strong>{" "}
                      {assignment.due_date
                        ? new Date(
                            `${String(assignment.due_date).slice(0, 10)}T00:00:00`,
                          ).toLocaleDateString()
                        : "No due date"}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>

        <section className="profile-progress">
          <div className="profile-progress-heading">
            <p>YOUR LEARNING JOURNEY</p>
            <h2>Keep Building Your Momentum</h2>
          </div>

          <div className="profile-progress-grid">
            <article>
              <span className="progress-icon purple">01</span>
              <div>
                <strong>Find Your People</strong>
                <p>Join groups and study together.</p>
              </div>
            </article>

            <article>
              <span className="progress-icon orange">02</span>
              <div>
                <strong>Stay Organized</strong>
                <p>Keep track of your upcoming work.</p>
              </div>
            </article>

            <article>
              <span className="progress-icon yellow">03</span>
              <div>
                <strong>Keep Going</strong>
                <p>Make progress one step at a time.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="profile-motivation">
          <span aria-hidden="true">✦</span>
          <div>
            <p>A LITTLE REMINDER</p>
            <h2>You're making progress every time you show up.</h2>
          </div>
        </section>

        <footer className="profile-footer">
          <p>
            <span>Course Connect</span> · Learn together, grow together.
          </p>
          <p>One step at a time.</p>
        </footer>
      </main>
    </div>
  );
}
