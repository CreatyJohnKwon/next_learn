import Image from "next/image"
import UserImage from "../../public/user.jpeg"

export default function Profile() {
  const userSet: Array<string> = ["닉네임 변경", "소셜 로그인 연동하기", "로그아웃"]

  return (
    <div>
      {/* <Image className="user_img" src={UserImage} alt="유저 프로필 이미지"/> */}
      <h1 className="title">Profile</h1>
      {
        userSet.map((menuNm, index) => {
            return (
              <div className="user-list" key={index}>
                <p className="user-text">{menuNm}</p>
              </div>
            )
        })
      }
    </div>
  )
}
  