using System.ComponentModel.DataAnnotations;

namespace sv_user_management.User.Application.Create;

public class UserCreateDto
{
    public string id { get; set; }
    public string name { get; set; }
    public string password { get; set; }
}