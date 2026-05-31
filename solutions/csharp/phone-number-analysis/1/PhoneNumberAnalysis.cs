using System.Reflection.Metadata;

public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {   
        bool IsNewYork = false;
        bool IsFake = false;
        if(phoneNumber.Substring(0,3) == "212"){
            IsNewYork = true;
        }
        if(phoneNumber.Substring(4,3) == "555"){
            IsFake = true;
        }
        string LocalNumber = phoneNumber.Substring(8,4);
    
        return (IsNewYork, IsFake, LocalNumber);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        (bool IsNewYork, bool IsFake, string LocalNumber) = phoneNumberInfo;
        return IsFake;

    }
}
