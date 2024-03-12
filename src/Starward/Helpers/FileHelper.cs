using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Starward.Helpers
{
    internal static class FileHelper
    {
        public static bool IsDirectory(string fullPath)
        {
            int nameLength = fullPath.Length;
            bool result =
                ((nameLength > 0) &&
                ((fullPath[nameLength - 1] == '/') || (fullPath[nameLength - 1] == '\\')))
                ;
            return result;
        }

        public static bool IsFile(string fullPath)
        {
            return !IsDirectory(fullPath);
        }
    }
}
