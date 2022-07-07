import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {HomeIcon, ListIcon, LogInIcon, MenuIcon, PercentCircle, ShoppingCartIcon} from "lucide-react";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

          <SheetContent side="left">
              <SheetHeader className="text-left text-lg font-semibold">
                  Menu
              </SheetHeader>

              <div className="mt-2 flex flex-col gap-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                      <LogInIcon size={16} />
                      Login
                  </Button>

                  <Button variant="outline" className="w-full justify-start gap-2">
                      <HomeIcon size={16} />
                      Home
                  </Button>

                  <Button variant="outline" className="w-full justify-start gap-2">
                      <PercentCircle size={16} />
                      Sale
                  </Button>

                  <Button variant="outline" className="w-full justify-start gap-2">
                      <ListIcon size={16} />
                      Catalogue
                  </Button>
              </div>
          </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Geek</span>
        Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
export default Header;
