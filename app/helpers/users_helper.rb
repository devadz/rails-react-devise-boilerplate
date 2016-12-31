module UsersHelper
  def avatar_for(user, option = { size: 80 })
    size = option[:size]
    if user.avatar?
      image_tag user.avatar.url(:thumb), width: size, class: "img-circle"
    elsif user.remote_avatar_url?
      image_tag user.remote_avatar_url, width: size, class: "img-circle"
    else
      ('<i class="fa fa-user-circle" aria-hidden="true" style="font-size : ' + size.to_s + 'px; vertical-align : middle;"></i>').html_safe
    end
  end
end
