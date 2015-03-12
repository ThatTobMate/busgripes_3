class NotificationsMailer < ActionMailer::Base

  default :from => "busgripes.com@googlemail.com"
  default :to => "busgripes.com@googlemail.com"

  def new_message(message)
    @message = message
    mail(:subject => "[Notification from BusGripes] #{message.subject}")
  end

end